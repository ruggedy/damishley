import { Action } from '@ngrx/store';
import { type } from '../util';


export const ActionTypes = {
	ADD:  					type('[imageUpload] Add'),
	ADD_COMPLETE:  			type('[imageUpload] Add Complete'),
};

export interface image {
	images: FileList
}

export class Add implements Action{
	type = ActionTypes.ADD;

	constructor(public payload: image){}
}

export class AddCompleted implements Action{
	type = ActionTypes.ADD_COMPLETE;

	constructor(public payload: string[]){}
}


export type Actions 
	= Add
	| AddCompleted