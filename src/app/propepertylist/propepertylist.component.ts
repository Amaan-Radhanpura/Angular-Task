import { Component, OnInit } from '@angular/core';
import { carts, main, ProductsService } from '../products.service';
import { Event } from '@angular/router';

@Component({
  selector: 'app-propepertylist',
  templateUrl: './propepertylist.component.html',
  styleUrls: ['./propepertylist.component.css']
})
export class PropepertylistComponent implements OnInit{
All:number =0;
greaterThenTen:number=0;
lessThenTen:number=0;
main:main = {
  carts:[],
  limit:0,
  skip:0,
  total:0
};

CartsData:carts[]=[]
Filtereddata:carts[]=[]
search:number=0;

constructor(private service:ProductsService){}

ngOnInit():void{
  this.service.fetch().subscribe(data=>{
    this.main=data;
    this.CartsData=data.carts
    this.All=this.CartsData.length;
    this.greaterThenTen=this.CartsData.filter(item=>item.totalQuantity>10).length;
    this.lessThenTen=this.CartsData.filter(item=>item.totalQuantity<10).length; 
  });
}
selectedRadioButton:string='';
onFilterChange(value:string){
  this.selectedRadioButton=value
  if(this.selectedRadioButton == 'All'){
    this.Filtereddata=this.CartsData
    console.log(this.Filtereddata)
  }
  else if(this.selectedRadioButton=='greaterThenTen'){
    this.Filtereddata=this.CartsData.filter(item=>item.totalQuantity>10)
  }
  else{
    this.Filtereddata=this.CartsData.filter(item=>item.totalQuantity<10)
  }
}

onSearch(val:number){
this.search=val
console.log(this.search)
  this.Filtereddata=this.CartsData.filter((item)=>
  {  return  item.userId==this.search ||
  item.id==this.search
  });
  console.log(this.Filtereddata)
}



}

