import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsupComponent } from './navsup.component';

describe('NavsupComponent', () => {
  let component: NavsupComponent;
  let fixture: ComponentFixture<NavsupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
