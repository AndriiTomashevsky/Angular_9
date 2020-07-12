import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductRepository
{
   products: Product[];
   categories: string[];
   startItems: number = 0;

   constructor(private dataSource: StaticDataSource)
   {
      this.dataSource.getProducts().subscribe(data =>
      {
         this.products = data;
         this.categories = data.map(p => p.category).filter((category, index, categories) => categories.indexOf(category) == index);
      });
   }

   getProducts(selectedCategory: string = null): Product[]
   {
      return this.products.filter(p => selectedCategory == null || selectedCategory == p.category);
   }

   getCategories(): string[]
   {
      return this.categories;
   }
}
