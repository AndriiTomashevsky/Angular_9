import { Product } from './product.model';

export class CartLine
{
   constructor(public product: Product, public quantity) { }

   get subtotalPrice(): number
   {
      return this.product.price * this.quantity;
   }
}
