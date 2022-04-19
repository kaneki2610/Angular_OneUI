import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfilesRoutingModule } from './user-profiles-routing.module';
import { UserProfilesComponent } from './user-profiles.component';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { CommonLibraryModule } from 'commonLibrary';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { VResponsiveModule } from '@vnpt/oneui-ui/responsive';
import { UserInfoComponent } from './user.component/user.component';
import { UserSecureComponent } from './secure.component/secure.component';
import { RouterModule } from '@angular/router';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { VSelectModule } from '@vnpt/oneui-ui/select';
import { VTableModule } from '@vnpt/oneui-ui/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VFormModule } from '@vnpt/oneui-ui/form';
import { VTabsModule } from '@vnpt/oneui-ui/tabs';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { VDatePickerModule } from '@vnpt/oneui-ui/date-picker';
import { VMenuModule } from '@vnpt/oneui-ui/menu';
import { VBadgeModule } from '@vnpt/oneui-ui/badge';
import { VAvatarModule } from '@vnpt/oneui-ui/avatar';
import { AppTypeComponent } from './app.type.component/app.type.component';

@NgModule({
  declarations: [UserProfilesComponent, UserInfoComponent,UserSecureComponent, AppTypeComponent],
  imports: [
    CommonModule,
    UserProfilesRoutingModule,
    RouterModule,
    VLayoutModule,
    VGridModule,
    VButtonModule,
    VIconModule,
    VTypographyModule,
    VCardModule,
    VResponsiveModule,
    VAffixModule,
    VSelectModule,
    VTableModule,
    CommonLibraryModule,
    FormsModule,
    ReactiveFormsModule,
    VFormModule,
    VTabsModule,
    VDividerModule,
    VInputModule,
    VDatePickerModule,
    VMenuModule,
    VBadgeModule,
    VAvatarModule
  ]
})
export class UserProfilesModule { }
