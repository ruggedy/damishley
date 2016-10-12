import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../../models/post';
import { Tag } from '../../../models/tag';
import { Category } from '../../../models/category';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as editor from '../../../actions/editor';
import * as category from '../../../actions/category';
import * as tag from '../../../actions/tag';
import * as imageUpload from '../../../actions/image-upload';

declare var tinymce:any;

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})

export class PostComponent implements OnInit {
	categories$: Observable<Category[]>;
	tags$: Observable<Tag[]>;
	images$: Observable<string[]>;

	private postContent: string;
	

	constructor(private sanitizer: DomSanitizer, private store: Store<fromRoot.State>) {
		this.categories$ = store.let(fromRoot.getAllCategories)
		this.tags$ = store.let(fromRoot.getAllTags)
		this.images$ = store.let(fromRoot.getImageUploaded)
	}

	onSubmit() {

		// if (this.post && this.category && this.title) {
		// 	let data: Post = {
		// 		title: this.title,
		// 		body: this.post,
		// 		category: this.category,
		// 		tags: this.tags,
		// 		mainPicture: this.images[0] ? this.images[0] : '',
		// 		featured: this.featured
		// 	}
		// 	this._postService.newPost(data)
		// 		.subscribe(
		// 		data => console.log(data),
		// 		error => console.log(error)
		// 		)
		// }

	}

	// onUpload() {
	// 	this._imageUploadService.uploadImage(this.file)
	// 		.then((response) => {
	// 			let obj: any = response;

	// 			let imageArray = obj.obj
	// 			imageArray.forEach((image: any) => {
	// 				let index = this.images.indexOf(image);

	// 				if (index === -1) {
	// 					this.images.push(image)
	// 				}
	// 			})
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
	// }

	addNewCategory(value){
		this.store.dispatch(new category.Add(value));
	}

	addNewTag(value){
		this.store.dispatch(new tag.Add(value));
	}

	uploadImage(value:FileList){

		console.log(value)
		let images: imageUpload.image = {
			images: value
		} ;
		this.store.dispatch(new imageUpload.Add(images));
	}

	ngOnInit() {

	}


}