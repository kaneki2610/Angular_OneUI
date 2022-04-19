import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'commonLibrary';
import { MainComponent } from './main/main.component';

const routes: Routes = [
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: '', component: MainComponent, canActivate: [AuthGuardService], children: [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      { path: 'profiles', loadChildren: () => import('./modules/user-profiles/user-profiles.module').then(m => m.UserProfilesModule) },
      { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
