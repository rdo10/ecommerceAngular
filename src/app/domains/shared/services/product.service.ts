import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private htttp = inject(HttpClient);

  getProducts(){
    return this.htttp.get('http://localhost:8090/products/all');
  }

  getProduct(id: string){
    return this.htttp.get(`http://localhost:8090/products/product/${id}`);
  }

  constructor() { }
}
