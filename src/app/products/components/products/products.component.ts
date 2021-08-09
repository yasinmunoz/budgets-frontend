import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  products: any = [];

  constructor(
    private _productsSVC : ProductsService
  ) { }

  ngOnInit(): void {
    this.inicialize();
  }

  async inicialize(){
    try{
      this.products = await this._productsSVC.all().toPromise();

    }catch(error){
      console.log(error);
    }
  }

  

}
