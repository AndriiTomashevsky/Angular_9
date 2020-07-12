import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';

@NgModule({
   declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
   imports: [ModelModule, BrowserModule],
   providers: [],
   exports:[StoreComponent] 
})
export class StoreModule { }
