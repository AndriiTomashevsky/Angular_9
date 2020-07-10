import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { ModelModule } from '../model/model.module';

@NgModule({
   declarations: [StoreComponent],
   imports: [ModelModule],
   providers: [],
   exports:[StoreComponent] 
})
export class StoreModule { }
