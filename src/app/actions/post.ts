import { Action } from '@ngrx/store';
import { Post } from '../models/post';
import { type } from '../util';


export const ActionTypes = {
	GET: 					type('[post] Get'),
	GET_COMPLETE: 			type('[post] Get Complete'),
	GET_FEATURED: 			type('[post] Get Featured'),
	GET_FEATURED_COMPLETE: 	type('[post] Get Featured Complete'),
	ADD:  					type('[Post] Add'),
	EDIT: 					type('[Post] Edit'),
	DELETE: 				type('[Post] Delete')
};



export class getPosts implements Action{
	type = ActionTypes.GET;
}

export class getPostsComplete implements Action{
	type = ActionTypes.GET_COMPLETE;

	constructor(public payload: Post[]){}
}

export class getFeatured implements Action{
	type = ActionTypes.GET_FEATURED;

}

export class getFeaturedComplete implements Action{
	type = ActionTypes.GET_FEATURED_COMPLETE

	constructor(public payload: Post){}
}

export class AddPost implements Action {
	type = ActionTypes.ADD;

	constructor(public payload: Post) {}
}

export class EditPost implements Action {
	type = ActionTypes.EDIT;

	constructor(public payload: Post) {}
}

export class DeletePost implements Action {
	type = ActionTypes.DELETE;

	constructor(public payload: string) {}
}

export type Actions
	= AddPost
	| EditPost
	| DeletePost
	| getPosts
	| getPostsComplete
	| getFeatured
	| getFeaturedComplete


