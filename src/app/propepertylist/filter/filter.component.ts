import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Carts, Main } from 'src/app/products.service';
import { ProductsComponent } from 'src/app/products/products.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {

displayedcolumns:string[]=['id','userId','totalProducts','totalQuantity','total','discountedTotal']
search:number=0;

constructor(public dialog:MatDialog){}
page:number=1;
pageSize:number=10;



@Output()
selectedFilterButtonChange : EventEmitter<string> = new EventEmitter<string>();

@Output()
Search:EventEmitter<number>= new EventEmitter<number>();

selectedFilterButton:string='All';

onSelectedRadioButton(){
  this.selectedFilterButtonChange.emit(this.selectedFilterButton);
}

onSearchFunction(){
  this.Search.emit(this.search);
}

  onRowClick(row: any) {
    this.dialog.open(ProductsComponent, {
      data: { products: row.products}
    });
  }

@Input()
All:number=0;

@Input()
greaterThenTen:number=0;

@Input()
lessThenTen:number=0;


@Input()
carts:Carts[]=[];

// arrived=false;

// change(){
//   this.arrived = !this.arrived;
// }

get paginatedCarts(){
  const startIndex=(this.page-1)*this.pageSize;
  const endIndex=startIndex + this.pageSize;
  return this.carts.slice(startIndex,endIndex);
}

onPageChange(event: PageEvent){
  this.page=event.pageIndex+1;
}
}
