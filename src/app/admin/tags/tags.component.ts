import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MdCheckboxModule } from '@angular/material/checkbox';
import { PostService } from '../../shared/index';

@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
	newTag:string = '';
	@Input()public tagsList:any[] = []; 
	checked:any[]= [];

	@Output() tags = new EventEmitter();

	constructor(private _postService: PostService) { }

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

		this.tags.emit({
			value: this.checked
		})
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

	addTag(){
		if(this.newTag) {
			let index = this.tagsList.indexOf(this.newTag);

			if(index === -1) {
				this._postService.newTags(this.newTag)
					.subscribe(
						data=> {this.tagsList.push(data.obj)},
						error=> console.log(error)
					)
			}
			this.newTag = '';
		}
	}

	ngOnInit() { 

	}

}