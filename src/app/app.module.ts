import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { ComponentsModule } from '../app/components/components.module';
import { NavBarComponent } from '../app/nav-bar/nav-bar.component';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MaterialModule } from './material';
import { TablaRegistroComponent } from './tabla-registro/tabla-registro.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TablaRegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule ,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
