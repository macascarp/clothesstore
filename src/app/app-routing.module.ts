import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { ProductsComponent } from './products/products.component';

const app_routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'products', component: ProductsComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''},
]


@NgModule({
  imports: [
    RouterModule.forRoot( app_routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
