import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductsItemComponent } from './products-item/products-item.component';
import { SharedModule } from '../shared/shared.module';
import { PagingHeaderComponent } from '../shared/paging-header/paging-header.component';



@NgModule({
  declarations: [
    ShopComponent,
    ProductsItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ], 
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
