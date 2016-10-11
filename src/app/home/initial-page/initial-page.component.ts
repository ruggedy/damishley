import 'rxjs/add/operator/let';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CarouselComponent, FeaturedPostComponent, PostItemsComponent, SideComponent } from '../index';
import { MdGridListModule } from '@angular/material/grid-list';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../../reducers';
import { Post } from '../../models/post';


@Component({
	selector: 'app-initial-page',
	templateUrl: './initial-page.component.html',
	styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {
	posts$: Observable<Post[]>;
	featuredPost$: Observable<Post>;
	constructor( store: Store<fromRoot.State>) { 
		this.posts$ = store.let(fromRoot.getAllPosts);
		this.featuredPost$ = store.let(fromRoot.getFeaturedPost);
	}

	ngOnInit() { 
		
	}

}