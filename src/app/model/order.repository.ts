import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class OrderRepository
{
   constructor(public staticDataSource: StaticDataSource) { }

   addOrder(order: Order): Observable<Order>
   {
      return this.staticDataSource.saveOrder(order);
   }
}
