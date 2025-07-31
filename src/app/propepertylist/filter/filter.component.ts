import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { carts, main } from 'src/app/products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {

displayedcolumns:string[]=['id','userId','totalProducts','totalQuantity','total','discountedTotal']

@Input()
All:number=0;

@Input()
Buy:number=0;

@Input()
Rent=0;

@Input()
carts:carts[]=[];
}
