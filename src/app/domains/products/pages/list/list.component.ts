import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { CategoryService } from '../../../shared/services/category.service';
import { Category } from '../../../shared/models/category.model';
import { RouterLinkWithHref } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ChatbotComponent } from '../../../shared/components/chatbot/chatbot.component';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent,CommonModule,HeaderComponent,RouterLinkWithHref,DialogModule,ButtonModule,ChatbotComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);
  @Input() categoryId?: string;
  private cartServices = inject(CartService);
  private productServices = inject(ProductService);
  public displayChatbotDialog: boolean = true;
  private categoryServices = inject(CategoryService);


  ngOnInit(){
    this.getproducts();
    this.getCategories();

  }

  ngOnChanges(changes: SimpleChanges){
    const categoryId = changes['categoryId'];

    if(categoryId){
      this.getProductByCategory();
    }
  }

addToCart(product: Product){
  this.cartServices.addToCart(product);
}


private getproducts(){
  this.productServices.getProducts()
  .subscribe({
    next: (products:any)=> {
     this.products.set(products)
     
    },
    error: () => {
      
    }
  })
}

private getCategories(){
this.categoryServices.getCategories()
  .subscribe({
    next: (categories:any)=> {
     this.categories.set(categories)
     
    },
    error: () => {
      
    }
  })
}


private getProductByCategory(){
  this.categoryServices.getByProduct(this.categoryId)
  .subscribe({
    next:(products: any)=>{
     this.products.set(products);
    }, error: ()=>{

    }
  })
}



showChatbotDialog() {
  this.displayChatbotDialog = true;
}

hideDialog() {
  this.displayChatbotDialog = false;
}

}
