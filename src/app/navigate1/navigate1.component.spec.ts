import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navigate1Component } from './navigate1.component';

describe('Navigate1Component', () => {
  let component: Navigate1Component;
  let fixture: ComponentFixture<Navigate1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Navigate1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navigate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
