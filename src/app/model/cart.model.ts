import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable()
export class Cart
{
   products: Product[] = [];
   public totalPrice: number = 0;
   public totalQuantity: number = 0;

   addProduct(product: Product)
   {
      this.totalPrice += product.price;
      this.totalQuantity += 1;
      this.products.push(product);
   }
}
