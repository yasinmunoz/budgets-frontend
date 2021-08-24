import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  files: any = [];
  preview!: string;

  constructor() { }

  ngOnInit(): void {
  }

  catchFile($event: any){
    //obtiene la imagen
    const capturedFile = $event.target.files[0];
    //aray donde dentro tenemos la imagen
    this.files.push(capturedFile);

    this.preview = atob(capturedFile)
  }
}
