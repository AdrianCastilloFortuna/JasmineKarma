import { NavBarComponent } from './../nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { componentFactoryName } from '@angular/compiler';





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
  declarations: []
})
export class ComponentsModule { }
