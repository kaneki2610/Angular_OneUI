import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general-components/header/header.component';
import { BreadcrumbComponent } from './general-components/breadcrumb/breadcrumb.component';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonLibraryModule } from 'commonLibrary';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';
import { VBreadCrumbModule } from '@vnpt/oneui-ui/breadcrumb';
import { VLogoModule } from '@vnpt/oneui-ui/logo';
import { VInputModule } from '@vnpt/oneui-ui/input';
import { VDrawerModule } from '@vnpt/oneui-ui/drawer';
import { VAvatarModule } from '@vnpt/oneui-ui/avatar';
import { VBadgeModule } from '@vnpt/oneui-ui/badge';
import { RootMenuComponent } from './general-components/root-menu/root-menu.component';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { MainComponent } from './main/main.component';
import { NotificationPanelComponent } from './general-components/notification-panel/notification-panel.component';
import { VListModule } from '@vnpt/oneui-ui/list';
import { SettingPanelComponent } from './general-components/setting-panel/setting-panel.component';
import { VNotificationModule } from '@vnpt/oneui-ui/notification';
import { VMessageModule } from '@vnpt/oneui-ui/message';
import { ProductModule } from './modules/product/product.module';
import { AppTypeService } from './services/app.type.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VFormModule } from '@vnpt/oneui-ui/form';
import { VSelectModule } from '@vnpt/oneui-ui/select';

registerLocaleData(localeVi);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    BreadcrumbComponent,
    RootMenuComponent,
    NotificationPanelComponent,
    SettingPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    VLayoutModule,
    VGridModule,
    VButtonModule,
    VIconModule,
    VTypographyModule,
    VBreadCrumbModule,
    VDropDownModule,
    VLogoModule,
    VInputModule,
    VDrawerModule,
    VAvatarModule,
    VBadgeModule,
    CommonLibraryModule,
    VAffixModule,
    HttpClientModule,
    VListModule,
    VNotificationModule,
    VMessageModule,
    ProductModule,
    FormsModule,
    ReactiveFormsModule,
    VFormModule,
    VSelectModule
  ],
  providers: [AppTypeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
