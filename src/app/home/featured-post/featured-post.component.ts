import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
	selector: 'app-featured-post',
	templateUrl: './featured-post.component.html',
	styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent implements OnInit {
	@Input()post: Post;
	
	constructor( ) { }

	ngOnInit() { 
		
	}

}