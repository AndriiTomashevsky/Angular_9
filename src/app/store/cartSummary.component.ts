import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { Cart } from '../model/cart.model';

@Component({
   selector: 'cart-summary',
   templateUrl: './cartSummary.component.html'
})
export class CartSummaryComponent
{
   constructor(public cart: Cart) { }
}
