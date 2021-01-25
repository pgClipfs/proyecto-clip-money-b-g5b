import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiroaldescubiertoComponent } from './giroaldescubierto.component';

describe('GiroaldescubiertoComponent', () => {
  let component: GiroaldescubiertoComponent;
  let fixture: ComponentFixture<GiroaldescubiertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiroaldescubiertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiroaldescubiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
