import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { MdUniqueSelectionDispatcher } from '@angular/material/core';
import { MdRadioModule } from '@angular/material/radio';
import { Observable } from 'rxjs/Rx';
import { PostService } from '../../shared/index';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
	providers: [ MdUniqueSelectionDispatcher ]
})
export class CategoryComponent implements OnInit {
	newCategory:string = '';
	@Input()public categoryList: any[] = [];

	@Output()category = new EventEmitter()

	constructor(private _postService: PostService) { }
	
	updateRadio(event:any){
		this.category.emit({
			value: event.value
		})
	}

	addCategory(){
		if(this.newCategory) {
			let index = this.categoryList.indexOf(this.newCategory)

			if(index === -1){
				this._postService.newCategory(this.newCategory)
					.subscribe(
						data=> this.categoryList.push(data.obj),
						error=> console.log(error)
					);
			}
			
			this.newCategory='';
		}
	}
	ngOnInit() { 

	}

}