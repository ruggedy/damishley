import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
	@Output()newTag = new EventEmitter();
	@Input()tagsList: any[] = [];
	@Input()checked: any[] = [];

	@Output() selectedTags = new EventEmitter();

	constructor() { }

	updateChecked(tag:any, event:any){
		let index = this.checked.indexOf(tag);
		if (event.checked) {
			if (index === -1) {
				this.checked.push(tag);
			}
		} else {
			if (index !== -1) {
				this.checked.splice(index, 1)
			}
		}

		this.selectedTags.emit(this.checked);
	}


	addTag(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			console.log(e.target.value);
			this.newTag.emit(e.target.value);
		}
	}

	ngOnInit() {

	}

	validateChecked(value: any){

	    if(this.checked[0]){
	        for(let i=0; i<this.checked.length; i++) {
	            if(value === this.checked[i]) {
	                return true
	            }
	        }
	    }
	    return false;
	}

}