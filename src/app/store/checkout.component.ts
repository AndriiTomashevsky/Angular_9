import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from '../model/cart.model';

@Component({
   templateUrl: 'checkout.component.html'
})
export class CheckoutComponent
{
   isOrderSent: boolean = false

   constructor(public cart: Cart) { }

   submitForm(form: NgForm)
   {
      this.isOrderSent = true;
      this.cart.clear();
   }
}
