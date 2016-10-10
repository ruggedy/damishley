import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { PostService, BlogService } from '../shared';
import * as post from '../actions/post';



@Injectable()
export class PostEffects {
	constructor(private actions$: Actions, private postService: PostService, private blogService: BlogService) { }

	@Effect()
	add$: Observable<Action> = this.actions$
		.ofType(post.ActionTypes.ADD)
		.map(action => action.payload)
		.switchMap(query => {
			if ( query === undefined||''||null) {
				return empty();
			}

			return this.postService.newPost(query)
				.map(value => new post.AddPost(value))
				.catch(() => of(new post.AddPost(null)));
		});
	@Effect()
	get$: Observable<Action> = this.actions$
		.ofType(post.ActionTypes.GET)
		.startWith( new post.getPosts())
		.switchMap(() => {
			return Observable.concat(
				this.blogService.getPosts()
				.map(res => new post.getPostsComplete(res.obj))
				.catch(()=> of(new post.getPostsComplete(null))),

				this.blogService.getFeaturedPost()
					.map(res => new post.getFeaturedComplete(res.obj))
					.catch(()=> of(new post.getFeaturedComplete(null)))
			)
		})
}

