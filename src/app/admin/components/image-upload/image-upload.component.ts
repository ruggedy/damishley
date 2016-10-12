import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-image-upload',
	templateUrl: './image-upload.component.html',
	styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
	@Input()imageList: string[] = [];
	@Output() imageUpload = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

}
