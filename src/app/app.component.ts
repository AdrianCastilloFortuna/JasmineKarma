import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Ecorporate';
  mostrar: any;
  likeit: any;
  arrowDirection: any;
  public mostrarDatos: boolean;
  constructor() {
    this.mostrarDatos = false;
    this.mostrar = true;
    this.likeit = false;
    this.arrowDirection = 'izquierda';

  }
  onShowHide(value) {
    this.mostrarDatos = value;
    console.log(value);
  }
  onclickimage() {
    console.log(this.likeit);
    this.likeit = !this.likeit;
  }
}
