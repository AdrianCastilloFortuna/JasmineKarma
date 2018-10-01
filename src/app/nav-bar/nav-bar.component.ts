import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
@NgModule({
  imports: [ BrowserModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
  })

export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showmessage() {
  alert(' hello ');
  }

}
