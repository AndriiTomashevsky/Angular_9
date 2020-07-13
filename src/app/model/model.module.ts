import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { OrderRepository } from './order.repository';
import { Order } from './order.model';

@NgModule({
   declarations: [],
   imports: [],
   providers: [ProductRepository, StaticDataSource, Cart, OrderRepository, Order],
   bootstrap: []
})
export class ModelModule { }
