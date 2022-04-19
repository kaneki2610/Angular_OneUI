import { ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { VAffixModule } from '@vnpt/oneui-ui/affix';
import { VButtonModule } from '@vnpt/oneui-ui/button';
import { VIconModule } from '@vnpt/oneui-ui/icon';
import { VLayoutModule } from '@vnpt/oneui-ui/layout';
import { BlankPageComponent } from './blank.page.component/blank.page.component';
import { AuthService } from './auth.service';
import { InterceptedHttp } from './http.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { ContexualActionBarComponent } from './contex.action.bar/action.bar.component';
import { ActionItemComponent } from './contex.action.bar/action.item.component/action.item.component';
import { VGridModule } from '@vnpt/oneui-ui/grid';
import { VToolTipModule } from '@vnpt/oneui-ui/tooltip';
import { MainContentComponent } from './main.content.component/main.content.component';
import { VTypographyModule } from '@vnpt/oneui-ui/typography';
import { DrawerContentComponent } from './drawer.content.component/drawer.content.component';
import { VCardModule } from '@vnpt/oneui-ui/card';
import { ActiveUrlCheckPipe } from './menu.pipes';
import { VMenuModule } from '@vnpt/oneui-ui/menu';
import { SubMenuComponent } from './menu.component/menu.component';
import { RouterModule } from '@angular/router';
import { ChangeDateTimePipe } from './changedatetime.pipe';
import { VDividerModule } from '@vnpt/oneui-ui/divider';
import { VListModule } from '@vnpt/oneui-ui/list';
import { ToolbarComponent } from './toolbar.component/toolbar.component';
import { ToolbarItemComponent } from './toolbar.component/toolbar.item.component/toolbar.item.component';
import { VDropDownModule } from '@vnpt/oneui-ui/dropdown';
import { CommonModule } from '@angular/common';
import { BottombarComponent } from './bottombar/bottombar.component';
import { AuthGuardService } from './router.guard';
import { QuickMenuComponent } from './quick-menu/quick-menu.component';



@NgModule({
  declarations: [
    BlankPageComponent,
    ContexualActionBarComponent,
    ActionItemComponent,
    MainContentComponent,
    DrawerContentComponent,
    ActiveUrlCheckPipe,
    SubMenuComponent,
    ChangeDateTimePipe,
    ToolbarComponent,
    ToolbarItemComponent,
    BottombarComponent,
    QuickMenuComponent,
  ],
  imports: [
    CommonModule,
    VGridModule,
    VAffixModule,
    VButtonModule,
    VIconModule,
    VToolTipModule,
    VTypographyModule,
    VCardModule,
    VMenuModule,
    RouterModule,
    VDividerModule,
    VListModule,
    VLayoutModule,
    VDropDownModule,
  ],
  exports: [
    BlankPageComponent,
    ContexualActionBarComponent,
    ActionItemComponent,
    MainContentComponent,
    DrawerContentComponent,
    ActiveUrlCheckPipe,
    SubMenuComponent,
    ChangeDateTimePipe,
    ToolbarComponent,
    ToolbarItemComponent,
    BottombarComponent,
    QuickMenuComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptedHttp,
      multi: true,
    },
  ],
})

export class CommonLibraryModule {
  public static forRoot(): ModuleWithProviders<CommonLibraryModule> {
    return {
      ngModule: CommonLibraryModule,
      providers: [AuthService, AuthGuardService],
    };
  }
}