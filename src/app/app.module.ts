import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './store/cart.component';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, StoreModule,
      RouterModule.forRoot([
         { path: "cart", component: CartComponent },
         { path: "store", component: StoreComponent },
         { path: "**", redirectTo: "/store" }
      ])],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
