import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './store/cart.component';
import { CheckoutComponent } from './store/checkout.component';
import { StoreFirstGuard } from './storeFirst.guard';

@NgModule({
   declarations: [AppComponent],
   imports: [BrowserModule, StoreModule,
      RouterModule.forRoot([
         { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
         { path: "cart", component: CartComponent, canActivate: [StoreFirstGuard] },
         { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
         { path: "**", redirectTo: "/store" }
      ])],
   providers: [StoreFirstGuard],
   bootstrap: [AppComponent]
})
export class AppModule { }
