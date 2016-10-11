import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Post } from '../models/post';
import * as post from '../actions/post';

export interface State {
	ids: string[];
	entities: {[id: string]: Post};
	featuredPostId: string | null;
	selectedPostId: string | null;
}


const initialState: State = {
	ids: [],
	entities: {},
	featuredPostId: null,
	selectedPostId: null
};

export function reducer(state = initialState, action: post.Actions): State {
	switch (action.type) {
		case post.ActionTypes.GET_COMPLETE: {

			if(action.payload === null){
				return state;
			}

			const posts = action.payload

			const newPostIds = posts.map(post => post._id);
			const newPostEntities = posts.reduce((entities: {[id: string]: Post}, post: Post) => {
				return Object.assign(entities, {
					[post._id]: post
				})
			}, {})

			return Object.assign({}, state, {
				ids: newPostIds,
				entities: newPostEntities
			})
		}

		case post.ActionTypes.GET_FEATURED_COMPLETE: {
			if (action.payload === null){
				return state;
			}

			const post = action.payload;

			const featuredId = post._id;

			return Object.assign({}, state, {
				featuredPostId: featuredId
			});
		}

		case post.ActionTypes.ADD: {
			const post = action.payload

			const newPostId = post._id;
			const newPostEntities = {
				[post._id] : post
			}

			if(post === null){
				return state;
			}

			return {
				ids: [ ...state.ids, newPostId],
				entities: Object.assign({}, state.entities, newPostEntities),
				featuredPostId: state.featuredPostId,
				selectedPostId: state.selectedPostId
			}
		}

		case post.ActionTypes.EDIT: {
			const post = action.payload;

			const postId = post._id;

			const editPostEntity = {
				[post._id] : post
			}

			return {
				ids: state.ids,
				entities: Object.assign({}, state.entities, editPostEntity),
				featuredPostId: state.featuredPostId,
				selectedPostId: state.selectedPostId
			}
		}

		case post.ActionTypes.DELETE: {
			const id = action.payload;
			const index = state.ids.indexOf(id);

			if (index < 0 ) {
				return state
			}

			return Object.assign({}, state, {
				ids: [...state.ids.slice(0, index), ...state.ids.slice(index+1)],
				entities: Object.keys(state.entities).reduce((result, key) => {
					if (key !== id) {
						result[key] = state.entities[key];
					}
					return result
				}, {})
			});
		}
	
		default:{
			return state;
		}		
	}
}

export function getPostIds(state$: Observable<State>) {
	return state$.select(state => state.ids);
}

export function getPostEntities(state$: Observable<State>) {
	return state$.select(state => state.entities);
}

export function getSelectedPostId(state$: Observable<State>) {
	return state$.select(state => state.selectedPostId);
}

export function getFeaturedPostId(state$: Observable<State>) {
	return state$.select(state => state.featuredPostId);
}


export function getAllPosts(state$: Observable<State>) {
	return combineLatest<{ [id: string]: Post }, string[]>(
		state$.let(getPostEntities),
		state$.let(getPostIds)
	)
	.map(([ entities, ids ]) => ids.map(id => entities[id]));
}



