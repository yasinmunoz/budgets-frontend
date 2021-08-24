import { HttpClient } from '@angular/common/http';
import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-browser',
	templateUrl: './browser.component.html',
	styleUrls: ['./browser.component.scss']
})
export class BrowserComponent implements OnInit {

	search = new FormControl('');
	@Output('search') searchEmitter = new EventEmitter<string>();

	/* @Input whereToLook !: string; */

	constructor(
		private _http: HttpClient,
	) { }

	ngOnInit(): void {
		try{
			/* 			this._http.get(this.whereToLook).subscribe(
	)
 */				
		} catch(error){
			console.log(error);
			
		}
	}

	searchTakeInstantValuesWhileWriting() {
		// te suscribes al buscador y cuando haya cambios los emites 
		this.search.valueChanges.subscribe(
			value => this.searchEmitter.emit(value)
		);
	}

	searchTakeValuesWhenFinishWriting() {
		// te suscribes al buscador y cuando haya cambios los emites 
		this.search.valueChanges
			.pipe(
				//tiempo de espera cuando terminas de escribir antes de emitir la busqueda
				debounceTime(300)

			)
			.subscribe(value => this.searchEmitter.emit(value));

	}

}
