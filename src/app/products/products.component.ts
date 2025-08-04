import { Component, Inject } from '@angular/core';
import { Carts, Main, Products, ProductsService } from '../products.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
// displayedcolumns:string[]=['discountedPercentage','discountedTotal','id','price','quantity','thumbnail']
  cartsData:Carts[]=[]
  productsData:Products[]=[]
  main:Main={
    carts:[],
     limit:0,
  skip:0,
  total:0
  };
 constructor(@Inject(MAT_DIALOG_DATA) public data: { products: string[] },private service: ProductsService) {
    this.service.fetch().subscribe((data)=>{
    this.main=data
    // console.log(this.main)
    this.cartsData=data.carts
    // console.log(this.cartsData)
    this.cartsData.forEach(cart => {
  if (cart.products && Array.isArray(cart.products)) {
    this.productsData.push(...cart.products); 
  }
});
// console.log(this.productsData)
  })
 }







}
