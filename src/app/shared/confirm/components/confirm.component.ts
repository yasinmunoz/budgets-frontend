import { Component, Input } from '@angular/core';
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

	@Input() buttons: ConfirmButton[] = [];


	constructor(
		private _modalRef: BsModalRef
	) { }

	handle(button: ConfirmButton) {
		
		/* si el boton tiene modo de actuar propio.... */
		if (button.handler) {
			button.handler();
		}

		/* por ultimo ocultar el modal */
		this._modalRef.hide();
	}

	close() {
		this._modalRef.hide();
	}
}