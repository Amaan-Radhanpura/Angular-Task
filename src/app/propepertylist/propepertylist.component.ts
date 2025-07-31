import { Component } from '@angular/core';
import { carts, main, ProductsService } from '../products.service';

@Component({
  selector: 'app-propepertylist',
  templateUrl: './propepertylist.component.html',
  styleUrls: ['./propepertylist.component.css']
})
export class PropepertylistComponent {
All:number=10;
Buy:number=4;
Rent:number=6;
main:main = {
  carts:[],
  limit:0,
  skip:0,
  total:0
};

CartsData:carts[]=[]

constructor(private service:ProductsService){}

fetchdetails(){
  this.service.fetch().subscribe(data=>{
    this.main=data;
    console.log(this.main);
    this.CartsData=data.carts
  });
}

}
export interface products{
 id: number,
  title: string,
  price: number,
  quantity: number,
  total: number,
  discountPercentage: number,
  discountedTotal: number,
  thumbnail: string
}
