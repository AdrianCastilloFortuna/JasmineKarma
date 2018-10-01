import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: ' ', redirectTo: '/home', pathMatch: 'full'},
  {path: 'nav-bar' , component: NavBarComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class ComponentsModule { }
