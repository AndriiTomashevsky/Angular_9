import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartComponent, CheckoutComponent],
   imports: [ModelModule, BrowserModule, RouterModule, FormsModule],
   providers: [],
   exports: [StoreComponent]
})
export class StoreModule { }
