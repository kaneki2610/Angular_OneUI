import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSecureComponent } from './secure.component/secure.component';

import { UserProfilesComponent } from './user-profiles.component';
import { UserInfoComponent } from './user.component/user.component';
import { AppTypeComponent } from './app.type.component/app.type.component';

const routes: Routes = [
  { path: '', component: UserProfilesComponent, children: [
    { path: '', component: UserInfoComponent },
    { path: 'security', component: UserSecureComponent },
    { path: 'appType', component: AppTypeComponent }
  ] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfilesRoutingModule { }
