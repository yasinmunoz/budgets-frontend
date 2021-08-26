import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	url: string = '';

	onSelectFile(e: any) {
		if (e.target.files) {
			let reader = new FileReader(); 1

			reader.readAsDataURL(e.target.files[0]);
			reader.onload = (event: any) => {
				this.url = event.target.result;
			}
		}
	}
}