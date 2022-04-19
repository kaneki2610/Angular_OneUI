import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { CommonLibraryModule } from 'commonLibrary';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { VResponsiveModule } from '@vnpt/oneui-ui/responsive';
import { VSelectModule } from '@vnpt/oneui-ui/select';
import { VTableModule } from '@vnpt/oneui-ui/table';
import { VDatePickerModule } from '@vnpt/oneui-ui/date-picker';
import { VImageModule } from '@vnpt/oneui-ui/image';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    VLayoutModule,
    VGridModule,
    VButtonModule,
    VIconModule,
    VTypographyModule,
    CommonLibraryModule,
    VCardModule,
    VResponsiveModule,
    VSelectModule,
    VDatePickerModule,
    VTableModule,
    VImageModule 
  ]
})
export class HomeModule { }
