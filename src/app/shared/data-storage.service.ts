import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators'
import { Product } from '../products/product.model';
import { ProductService } from '../products/product.service';
import { ResponseModel } from './response.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService{
    public openCartFlag:boolean= false;
    public noOfTotalItems:number;
    public isLoading:boolean=true;

    constructor(private http:HttpClient,private productService:ProductService){}
    fetchProducts(){
        this.isLoading=true;
        return this.http.get<ResponseModel>('https://www.mocky.io/v2/5eda4003330000740079ea60')
        .pipe(map(response=>{
            this.isLoading=false;
                    return response.data
        }),
        tap(response => {
            this.productService.setProducts(response); 
        })
        )
    }
}