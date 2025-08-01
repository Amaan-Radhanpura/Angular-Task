import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { carts, main } from 'src/app/products.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {

displayedcolumns:string[]=['id','userId','totalProducts','totalQuantity','total','discountedTotal']
search:number=0;



@Output()
selectedFilterButtonChange : EventEmitter<string> = new EventEmitter<string>();

@Output()
Search:EventEmitter<number>= new EventEmitter<number>();

selectedFilterButton:string='';

onSelectedRadioButton(){
  this.selectedFilterButtonChange.emit(this.selectedFilterButton);
}

onSearchFunction(){
  this.Search.emit(this.search);
}


@Input()
All:number=0;

@Input()
greaterThenTen:number=0;

@Input()
lessThenTen:number=0;


@Input()
carts:carts[]=[];

}
