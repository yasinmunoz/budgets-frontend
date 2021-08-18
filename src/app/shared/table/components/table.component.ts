import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() headers!: any[];
  @Input() data!: any[];
  @Input() buttons!: any[];
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.buttons[1].iconClass);
    
  }

}
