import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-post-items',
	templateUrl: './post-items.component.html',
	styleUrls: ['./post-items.component.scss'], 
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostItemsComponent implements OnInit {
	
	@Input()posts: any;

	constructor() { 

	}

	ngOnInit() { 
		
	}

}