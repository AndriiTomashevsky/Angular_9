import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
   templateUrl: './cart.component.html'
})
export class CartComponent
{
   constructor(public cart: Cart) { }
}
