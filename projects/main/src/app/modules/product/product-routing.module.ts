import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppTypeComponent } from '../user-profiles/app.type.component/app.type.component';

const routes: Routes = [
  { path: '', component: AppTypeComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
