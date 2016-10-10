import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CKEditorModule } from 'ng2-ckeditor';
import { TagsComponent } from '../tags/index';
import { CategoryComponent } from '../category/index';
import { PostService, ImageUploadService } from '../../shared/index';
import { MdGridListModule } from '@angular/material/grid-list';
import { MdCheckboxModule } from '@angular/material/checkbox'; 
import 'rxjs/Rx';  
import {Observable} from 'rxjs/Observable';
import { Post } from '../../models/post';  

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	
})
export class PostComponent implements OnInit {
	post:string;
	trustedPost: any;
	tags: any[];
	images: any[] = [];
	data: Observable<any>;
	title: string;
	categoryList:any;
	featured: any = false;
	tagList:any;
	file: any;

	category:any;

	constructor(private sanitizer: DomSanitizer, private _postService: PostService, private _imageUploadService: ImageUploadService) { 
	}

	selectedTags(event:any){
		this.tags = event.value;
	}

	selectedCategory(event:any){
		this.category = event.value;
	}

	onChange(event:any) {
		console.log(event);
		console.log(this.post);
		this.trustedPost = this.sanitizer.bypassSecurityTrustHtml(this.post);
	}

	onSubmit(){
				
		if(this.post && this.category && this.title){
			let data: Post = {
				title: this.title,
				body: this.post,
				category: this.category,
				tags: this.tags,
				mainPicture: this.images[0]? this.images[0] : '',
				featured: this.featured
			}
			this._postService.newPost(data)
				.subscribe(
					data=>console.log(data),
					error=> console.log(error)
				)
		}

	}

	changeFeatured(event: any){
		this.featured = event.checked;
	}

	onUpload(){
		this._imageUploadService.uploadImage(this.file)
			.then((response) => {
				let obj: any = response;

				let imageArray = obj.obj
				imageArray.forEach((image: any) => {
					let index = this.images.indexOf(image);

					if(index === -1){
						this.images.push(image)
					}
				})
			})
			.catch(err => {
				console.log(err)
			})
	}



	ngOnInit() { 
		this._postService.getCategorys()
			.subscribe(
				data=> {
					if(data.obj){
						this.categoryList = data.obj;
					} else {
						this.categoryList = [];
					}
				},
				error=> console.log(error)
			)
		this._postService.getTags()
			.subscribe(
				data=> {
					if(data.obj){
						this.tagList = data.obj;
					} else {
						this.tagList = [];
					}
				},
				error=> console.log(error)
			)
	}

}