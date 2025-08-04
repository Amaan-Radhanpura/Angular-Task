import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiurl='https://dummyjson.com/carts';
  constructor(private http : HttpClient) { }
   fetch():Observable<Main>{
    return this.http.get<Main>(this.apiurl);
   }

   fetchProducts():Observable<Carts[]>{
    return this.http.get<Carts[]>(this.apiurl);
   }
}

export interface Main{
  carts:Carts[];
  limit:number;
  skip:number;
  total:number;
}

export interface Carts{
  discountedTotal:number;
  id:number;
  products:Products[];
  total:number;
  totalProducts:number;
  totalQuantity:number;
  userId:number;
}

export interface Products{
  discountedPercentage:number;
  discountedTotal:number;
  id:number;
  price:number;
  quantity:number;
  thumbnail:string;
  title:string;
  total:number;
}