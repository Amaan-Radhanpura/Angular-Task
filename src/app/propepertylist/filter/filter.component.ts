import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Carts, Main, Products } from 'src/app/products.service';
import { ProductsComponent } from 'src/app/products/products.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements AfterViewInit  {

displayedcolumns:string[]=['id','userId','totalProducts','totalQuantity','total','discountedTotal']
displayedColumns1:string[]=['id','title','quantity','price','discountPercentage','discountedTotal','total']

search:number=0;

display:boolean=true
productsData:Products[]=[]
expandedElement:Carts|null=null;
ds=new MatTableDataSource<Carts>();

toggleRow(row:any){
this.expandedElement=this.expandedElement===row?null:row;
this.display=false
}

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

@Input()
All:number=0;

@Input()
greaterThenTen:number=0;

@Input()
lessThenTen:number=0;


@Input() set tableData(data:Carts[]){
  this.ds.data=data
}

@ViewChild(MatPaginator) paginator!:MatPaginator;
ngAfterViewInit(){  
  this.ds.paginator=this.paginator
} 
}
