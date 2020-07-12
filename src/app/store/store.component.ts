import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';

@Component({
   selector: 'store',
   templateUrl: './store.component.html',
   styleUrls: ['./store.component.css']
})
export class StoreComponent
{
   constructor(private repository: ProductRepository, private cart: Cart) { }

   selectedCategory: string = null;
   selectedItemsPerPage: number = 4;
   selectedPage: number = 1;

   get products(): Product[]
   {
      let startIndex = (this.selectedPage - 1) * this.selectedItemsPerPage;
      let endIndex = startIndex + this.selectedItemsPerPage

      return this.repository.getProducts(this.selectedCategory).slice(startIndex, endIndex);
   }

   get categories(): string[]
   {
      return this.repository.getCategories();
   }

   changeCategory(category?: string)
   {
      this.selectedCategory = category;
      this.changePage(1);
   }

   changeItems(items: number)
   {
      this.selectedItemsPerPage = Number(items);
      this.changePage(1);
   }

   changePage(page: number)
   {
      this.selectedPage = page;
   }

   get numberOfPages(): number
   {
      return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.selectedItemsPerPage);
   }

   addToCart(product: Product)
   {
      this.cart.addProduct(product);
   }
   //get pages(): number[]
   //{
   //   let numberOfPages = Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.selectedItemsPerPage);

   //   return Array(numberOfPages).fill(0).map((zero, index, zeros) => index + 1);
   //}
}
