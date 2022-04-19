import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { CommonLibraryModule } from 'commonLibrary';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { VResponsiveModule } from '@vnpt/oneui-ui/responsive';
import { CreateComponent } from '../user-profiles/create.component/create.component';


@NgModule({
  declarations: [ProductComponent, CreateComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    VLayoutModule,
    VGridModule,
    VButtonModule,
    VIconModule,
    VTypographyModule,
    CommonLibraryModule,
    VCardModule,
    VResponsiveModule
  ]
})
export class ProductModule { }
