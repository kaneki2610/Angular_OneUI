import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { CommonLibraryModule } from 'commonLibrary';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { VResponsiveModule } from '@vnpt/oneui-ui/responsive';
import { VLogoModule } from '@vnpt/oneui-ui/logo';
import { VFormModule } from '@vnpt/oneui-ui/form';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { VCheckboxModule } from '@vnpt/oneui-ui/checkbox';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VAlertModule } from '@vnpt/oneui-ui/alert';
import { VNotificationModule } from '@vnpt/oneui-ui/notification';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    VLogoModule,
    VFormModule,
    VInputModule,
    VIconModule,
    VCheckboxModule,
    VButtonModule,
    VGridModule,
    VDividerModule,
    ReactiveFormsModule,
    FormsModule,
    VAlertModule,
    VTypographyModule,
    VLayoutModule,
    VNotificationModule,
    CommonLibraryModule
  ]
})
export class LoginModule { }
