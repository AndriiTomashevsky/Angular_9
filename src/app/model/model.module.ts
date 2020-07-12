import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { BrowserModule } from '@angular/platform-browser';
import { Cart } from './cart.model';

@NgModule({
   declarations: [],
   imports: [],
   providers: [ProductRepository, StaticDataSource, Cart],
   bootstrap: []
})
export class ModelModule { }
