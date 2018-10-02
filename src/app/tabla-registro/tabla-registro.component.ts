import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-tabla-registro',
  templateUrl: './tabla-registro.component.html',
  styleUrls: ['./tabla-registro.component.sass']
})

@NgModule({
  imports: [BrowserModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TablaRegistroComponent implements OnInit {

  title: any = 'Tabla de Empleados';

  Employees = [
    { 'name': 'Alberto', position: 'Manager', email: 'aManagerd@hotmail.com' },
    { 'name': 'Adrian', position: 'Developer', email: 'aDevelope@hotmail.com' },
    { 'name': 'MArio', position: 'Architect', email: 'aArchitect@hotmail.com' }
  ];
  model: any = {};
  model2: any = {};
  msg: String = '';
  hideUpdate = true;
  myvalue;
  addEmployee(): void {
    this.Employees.push(this.model);
    this.model = {};
    this.msg = 'record is successfully Added';
  }
  deleteEmployee(i): void {
    const answer = confirm('Do you really quit??');
    if (answer) {
      this.Employees.splice(i, 1);
    }
    this.msg = 'record is successfully delete';
  }
  editEmployee(i) {
    this.hideUpdate = false;
    this.model2.name = this.Employees[i].name;
    this.model2.position = this.Employees[i].position;
    this.model2.email = this.Employees[i].email;
    this.myvalue = i;
  }
  updateEmployee() {
    const i = this.myvalue;
    for (let j = 0; j < this.Employees.length; j++) {
      if (i === j) {
        this.Employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'record is successfully Updated';
      }
    }
    this.hideUpdate = true;
  }

  closeAlert(): void {
    this.msg = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
