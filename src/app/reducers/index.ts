import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer, combineReducers } from '@ngrx/store';

import { compose } from '@ngrx/core/src/compose';
import { Post } from '../models/post';

import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../environments/environment'

import * as fromPost from './posts';
import * as fromTag from './tags';
import * as fromCategory from './categories';
import * as fromEditor from './editors';
import * as fromRouter from '@ngrx/router-store';

export interface State {
	posts: fromPost.State;
	tags: fromTag.State;
	categories: fromCategory.State;
	router: fromRouter.RouterState;
	editor: fromEditor.State
}


const reducers = {
	posts: fromPost.reducer,
	tags: fromTag.reducer,
	categories: fromCategory.reducer,
	router: fromRouter.routerReducer,
	editor: fromEditor.reducer
}

const developmentReducer = compose(storeFreeze, combineReducers)(reducers)
const productionReducer = combineReducers(reducers)

export function reducer(state: any, action:any) {
	
	if (environment.production) {
		return productionReducer(state, action);
	} else {
		return developmentReducer(state, action);
	}
}

// get editor page load

export function getEditorState(state$: Observable<State>) {
	return state$.select(state => state.editor);
}

export const getActiveEditor = compose(fromEditor.getEditorState, getEditorState)

// Post Top Level selectors
export function getPostState(state$: Observable<State>) {
	return state$.select(state => state.posts);
}



export const getPostEntities = compose(fromPost.getPostEntities, getPostState);
export const getPostIds = compose(fromPost.getPostIds, getPostState);
export const getSelectedPostId = compose(fromPost.getSelectedPostId, getPostState);
export const getFeaturedPostId = compose(fromPost.getFeaturedPostId, getPostState);
export const getAllPosts = compose(fromPost.getAllPosts, getPostState);


export const getFeaturedPost = (state$: Observable<State>) => {
	return combineLatest<{ [id: string]: Post }, string>(
		state$.let(getPostEntities),
		state$.let(getFeaturedPostId)
	)
	.map(([ entities, id]) => entities[id])
};

// Tags Top Level Selectors
export function getTagState(state$: Observable<State>) {
	return state$.select(state => state.tags )
}

export const getTagEntities = compose(fromTag.getTagEntities, getTagState);
export const getTagIds = compose(fromTag.getTagIds, getTagState);
export const getSelectedTagId = compose(fromTag.getSelectedTagId, getTagState);


// Categories Top Level Selectors

export function getCategoryState(state$: Observable<State>) {
	return state$.select(state => state.categories);
}

export const getCategoryEntities = compose(fromCategory.getCategoryEntities, getCategoryState);
export const getCategoryIds = compose(fromCategory.getCategoryIds, getCategoryState);
export const getSelectedCategoryId = compose(fromCategory.getSelectedCategoryId, getCategoryState);
