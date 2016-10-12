import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';

import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
	@Input()categoryList: any[] = [];
	@Output()newCategory = new EventEmitter()
	@Output()selectedCategory = new EventEmitter();

	constructor() { }

	addCategory(e){
		if(e.keyCode === 13) {
			e.preventDefault();
			console.log(e.target.value);
			this.newCategory.emit(e.target.value);
		}
	}
	ngOnInit() { 

	}

}