import { componentFactoryName } from '@angular/compiler';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Ecorporate'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Ecorporate');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Ecorporate!');
  }));
});

// describe('Test Pruebas', () => {
//   // con F fijas el foco donde tu elijas saltando las demas pruebas OJO !!!!!!!! fit o fdescribe
//   it('el valor value debe contener booleano', () => {
//       // REGLA DE LAS TRES AAA
//       // Preparar & Arrange
//       // Actuar & act
//       expect(value).toContaintoBeTruthy(9);
//   });

//   it('Esto debería mostrarnos 4', () => {
//       // Preparar & Arrange
//       // Actuar & act
//       const resulttwo = AppComponent.toString("arrow");
//       // Verificar & assert
//       expect(resulttwo).toEqual(4);
//   });
// });
