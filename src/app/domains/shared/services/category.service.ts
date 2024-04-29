import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private htttp = inject(HttpClient);

  constructor() { }

  

  getCategories(){
    return this.htttp.get('http://localhost:8090/categories/all');
  }

  getByProduct(categoryId?:string){
    return this.htttp.get(`http://localhost:8090/products/productCategory/${categoryId}`);
  }
}
