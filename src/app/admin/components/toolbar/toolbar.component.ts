import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss']
})
export class AdminToolbarComponent implements OnInit {
	@Input() title = '';
	constructor() { }

	ngOnInit() {
	}

}
