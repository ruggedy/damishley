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

export interface State {
	posts: fromPost.State;
}


const reducers = {
	posts: fromPost.reducer
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

export function getPostState(state$: Observable<State>) {
	return state$.select(state => state.posts);
}



export const getPostEntities = compose(fromPost.getPostEntities, getPostState);
export const getPostIds = compose(fromPost.getPostIds, getPostState);
export const getSelectedPostId = compose(fromPost.getSelectedPostId, getPostState);
export const getFeaturedPostId = compose(fromPost.getFeaturedPostId, getPostState);
export const getAllPosts = compose(fromPost.getAllPosts, getPostState);
