import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiurl='https://dummyjson.com/carts';
  constructor(private http : HttpClient) { }
   fetch():Observable<main>{
    return this.http.get<main>('https://dummyjson.com/carts');
   }
}

export interface main{
  carts:carts[];
  limit:number;
  skip:number;
  total:number;
}

export interface carts{
  discountedTotal:number;
  id:number;
  products:products[];
  total:number;
  totalProducts:number;
  totalQuantity:number;
  userId:number;
}

export interface products{
  discountedPercentage:number;
  discountedTotal:number;
  id:number;
  price:number;
  quantity:number;
  thumbnail:string;
  title:string;
  total:number;
}