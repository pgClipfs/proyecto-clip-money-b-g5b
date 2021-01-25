import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCuentaComponent } from './tarjeta-cuenta.component';

describe('TarjetaCuentaComponent', () => {
  let component: TarjetaCuentaComponent;
  let fixture: ComponentFixture<TarjetaCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
