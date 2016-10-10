import { Component, OnInit } from '@angular/core';
import { CarouselComponent, FeaturedPostComponent, PostItemsComponent, SideComponent } from '../index';
import { MdGridListModule } from '@angular/material/grid-list';
import { BlogService } from '../../shared/index';

@Component({
	selector: 'app-initial-page',
	templateUrl: './initial-page.component.html',
	styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
	constructor( private _blogService: BlogService) { }

	ngOnInit() { 
		
	}

}