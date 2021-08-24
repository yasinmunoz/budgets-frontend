import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/products/interfaces/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() fields !: any[];
  @Input() item   !: Product;

  productForm: FormGroup = this._formBuilder.group({
    id: [null],
    prio: [null],
    name: [null],
    price: [null, [Validators.required]],
    typeName: [null],
    quantity: [null, [Validators.required]],
    quantityMax: [null, [Validators.required]],
    description: [null],
  });

  editable: boolean = false;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.item.typeName = this.item.type.name;
    this.productForm.patchValue(this.item);
  }

  editar() {
    this.editable = true;
  }

  save() {

    this.editable = false;
  }
}
