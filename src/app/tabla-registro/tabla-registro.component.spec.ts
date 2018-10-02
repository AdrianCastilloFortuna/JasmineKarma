import { by } from 'protractor';
import { AppModule } from './../app.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRegistroComponent } from './tabla-registro.component';

describe('TablaRegistroComponent', () => {
  let component: TablaRegistroComponent;
  let fixture: ComponentFixture<TablaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TablaRegistroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.model).toBeTruthy();
  });
});

describe('Declared variables for the form', () => {
  const tablaRegistroComponent = new TablaRegistroComponent();
  // con F fijas el foco donde tu elijas saltando las demas pruebas OJO !!!!!!!! fit o fdescribe
  it('should accept values', () => {
    expect(tablaRegistroComponent.Employees[1].name).toEqual('Adrian');
    expect(tablaRegistroComponent.Employees[1].position).toEqual('Developer');
    expect(tablaRegistroComponent.Employees[1].email).toEqual('aDevelope@hotmail.com');
    expect(tablaRegistroComponent.hideUpdate).toEqual(true);
    expect(tablaRegistroComponent.myvalue).toBeUndefined(true);
    expect(tablaRegistroComponent.msg).toBeDefined(true);
    expect(tablaRegistroComponent.model[1]).toBeUndefined(false);
    expect(tablaRegistroComponent.model2[1]).toBeUndefined(false);
    expect(tablaRegistroComponent.title).toBeDefined(false);
    expect(tablaRegistroComponent.title).toEqual('Tabla de Empleados');

  

  });


});


