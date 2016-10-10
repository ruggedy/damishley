import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { MdGridListModule } from '@angular/material/grid-list';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	animations: [
		trigger('imageState', [
			state('zero', style({
				transform: 'translateX(0%)'
			})),
			state('one',   style({
				transform: 'translateX(-25%)'
			})),
			state('two', style({
				transform: 'translateX(-50%)'
			})),
			state('three', style({
				transform: 'translateX(-75%)'
			})),
			transition('zero <=> one', animate('1s ease-in-out')),
			transition('zero <=> two', animate('1s ease-in-out')),
			transition('zero <=> three', animate('1s ease-in-out')),
			transition('one <=> two', animate('1s ease-in-out')),
			transition('one <=> three', animate('1s ease-in-out')),
			transition('two <=> three', animate('1s ease-in-out'))
		])
  ]
})
export class CarouselComponent implements OnInit {
	
	currentIndex: number = 0;
	imagePos: string = 'zero';

	images: Array<Object> = [
		{image: ['./assets/images/image4.JPG','./assets/images/image1.JPG'], header: 'Donating an Object' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, maiores.'},
		{image: ['./assets/images/fashion.jpeg','./assets/images/beauty.jpeg'], header: 'Fashion & Beauty' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, maiores.'},
		{image: ['./assets/images/shopping.jpg','./assets/images/kitchen.jpg'], header: 'Shopping & Kitchen' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, maiores.'},
		{image: ['./assets/images/image4.JPG','./assets/images/image4.JPG'], header: 'Adventure & Health' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, maiores.'}
		
	]

	borderClass(){

		if (this.currentIndex === 0) {
			return 'sync border-color-zero';
		} else if (this.currentIndex === 1) {
			return 'sync border-color-one';
		} else if (this.currentIndex === 2) {
			return 'sync border-color-two';
		} else if (this.currentIndex === 3) {
			return 'sync border-color-three';
		}

		return ''
	}

	changeIndex(index:any){
		this.currentIndex = index;
		if (index === 0) {
			this.imagePos = 'zero';
		} else if (index === 1) {
			this.imagePos = 'one'
		} else if (index === 2) {
			this.imagePos = 'two'
		} else if (index === 3) {
			this.imagePos = 'three'
		}

		console.log(this.imagePos);
	}

	constructor() { }

	ngOnInit() { }

}