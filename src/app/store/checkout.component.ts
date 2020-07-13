import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cart } from '../model/cart.model';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';

@Component({
   templateUrl: 'checkout.component.html'
})
export class CheckoutComponent
{
   isOrderSent: boolean = false

   constructor(public cart: Cart, public orderRepository: OrderRepository, public order: Order) { }

   submitForm(form: NgForm)
   {
      this.isOrderSent = true;
      this.cart.clear();
      this.orderRepository.addOrder(this.order);
   }
}
