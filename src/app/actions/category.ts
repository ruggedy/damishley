import { Action } from '@ngrx/store';
import { Category } from '../models/category';
import { type } from '../util';


export const ActionTypes = {
	GET: 					type('[category] Get'),
	GET_COMPLETE: 			type('[category] Get Complete'),
	ADD:  					type('[category] Add'),
	EDIT: 					type('[category] Edit'),
	DELETE: 				type('[category] Delete')
};



export class GetCategory implements Action{
	type = ActionTypes.GET;
}

export class GetCategoryComplete implements Action{
	type = ActionTypes.GET_COMPLETE;

	constructor(public payload: Category[]){}
}

export class Add implements Action{
	type = ActionTypes.ADD;

	constructor(public payload: Category){}
}

export class Edit implements Action{
	type = ActionTypes.EDIT;

	constructor(public payload: Category){}
}

export class Delete implements Action{
	type = ActionTypes.DELETE;

	constructor(public payload: Category){}
}

export type Actions 
	= GetCategory
	| GetCategoryComplete
	| Add
	| Edit
	| Delete