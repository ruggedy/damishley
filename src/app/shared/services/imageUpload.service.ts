import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class ImageUploadService {
	constructor() {}
	
	uploadImage(value: any) {
		
		return new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();
			
			let files = value.target.files;
			formData.append('random', 'randomshit');
			formData.append('another', 'stupid');
			console.log(files)
			for (let i = 0; i < files.length; i++) {
				formData.append('uploads[]', files[i], files[i].name);	
			}
			console.log(formData)
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if(xhr.status === 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', environment.API_DEST +'image-upload', true);
			xhr.send(formData);

		})

	}
}


