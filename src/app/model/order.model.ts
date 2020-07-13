import { Injectable } from '@angular/core';

@Injectable()
export class Order
{
   constructor(
      public id: number,
      public name: string,
      public code: string
   ) { }
}
