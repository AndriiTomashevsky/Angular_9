import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { CartLine } from './cartLine.model';

@Injectable()
export class Cart
{
   public lines: CartLine[] = []
   public totalPrice: number = 0;
   public totalQuantity: number = 0;

   addProduct(product: Product)
   {
      this.createOrChangeCartline(product);
      this.changeTotalsPriceAndQuantity()
   }

   createOrChangeCartline(product: Product)
   {
      let cartLine = this.lines.find(cl => cl.product.id == product.id);

      if (cartLine == undefined)
      {
         this.lines.push(new CartLine(product, 1));
      }
      else
      {
         cartLine.quantity += 1;
      }
   }

   changeTotalsPriceAndQuantity()
   {
      this.totalPrice = 0;
      this.totalQuantity = 0;

      this.lines.forEach(cl =>
      {
         this.totalPrice += cl.product.price * cl.quantity;
         this.totalQuantity += cl.quantity
      });
   }

   changeLineQuantity(quantity: number, productId: number)
   {
      let cartLine = this.lines.find(cl => cl.product.id == productId);
      cartLine.quantity = Number(quantity);
      this.changeTotalsPriceAndQuantity()
   }

   removeProduct(productId: number)
   {
      let index = this.lines.findIndex(cl => cl.product.id = productId);
      this.lines.splice(index, 1);
      this.changeTotalsPriceAndQuantity();
   }
}
