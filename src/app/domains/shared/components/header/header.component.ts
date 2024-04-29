import { Component, Inject, Input,SimpleChanges, inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLinkWithHref,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartServices = inject(CartService);
   cart = this.cartServices.cart;
   total = this.cartServices.total; 


   
  toogleSideMenu() {
    this.hideSideMenu.update(status => !status);
  }

}
