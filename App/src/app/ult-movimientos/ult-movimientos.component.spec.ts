import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltMovimientosComponent } from './ult-movimientos.component';

describe('UltMovimientosComponent', () => {
  let component: UltMovimientosComponent;
  let fixture: ComponentFixture<UltMovimientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltMovimientosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltMovimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
