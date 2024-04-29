import { Component, Input, inject, signal } from '@angular/core';
import { CartService } from '../../../shared/services/cart.service';
import { Product } from '../../../shared/models/product.model';
import { ProductService } from '../../../shared/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input() id?: string;
  products = signal<Product | null>(null);
  cover = signal('');
  private cartServices = inject(CartService);
  private productServices = inject(ProductService);


  ngOnInit() {
    console.log('entra al componente');
    console.log(this.id);
    if (this.id) {


      this.productServices.getProduct(this.id)
        .subscribe({
          next: (product: any) => {
            this.products.set(product)
            if(product.images.length >0){
              this.cover.set(product.images[0])
            }

          },
          error: () => {

          }
        })
    }
  }

  addToCart(product: Product | null) {
    if (this.id == '' || this.id == undefined) {
      this.cartServices.addToCart(null)
    } else {
      this.cartServices.addToCart(product);
    }
  }

  changeCover(newImg:string){
    this.cover.set(newImg); 
  }

}
