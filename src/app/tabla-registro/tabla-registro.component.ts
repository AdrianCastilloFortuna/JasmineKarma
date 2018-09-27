import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabla-registro',
  templateUrl: './tabla-registro.component.html',
  styleUrls: ['./tabla-registro.component.sass']
})
export class TablaRegistroComponent implements OnInit {

  title: any = 'Tabla de Empleados';

  Employees = [
    { 'name': 'Alberto', position: 'Manager', email: 'adefepadasad@hotmail.com'},
    { 'name': 'Adrian', position: 'Developer', email: 'adefepadasad@hotmail.com'},
    { 'name': 'MArio', position: 'Architect', email: 'adefepadasad@hotmail.com'}
  ];
model: any = {};
addEmployee(): void {
this.Employees.push(this.model);
}
deleteEmployee(): void {

}
editEmployee(): void {

}
updateEmployee(): void {

}
  constructor() { }

  ngOnInit() {
  }

}
