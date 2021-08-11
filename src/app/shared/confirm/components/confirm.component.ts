import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmButton } from '../interfaces/confirm-button';


@Component({
	selector: 'app-confirm',
	templateUrl: './confirm.component.html',
	styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

	title!: string;
	description!: string;
	message!: string;

	buttons: ConfirmButton[] = [{ title: 'test2' }];


	constructor(
		private _modalRef: BsModalRef
	) { }

	handle(button: ConfirmButton) {
		console.log(this.buttons);
		if (button.handler) {
			button.handler();
		}
		this._modalRef.hide();
	}
}