import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalaculatorappComponent } from './calaculatorapp.component';

describe('CalaculatorappComponent', () => {
  let component: CalaculatorappComponent;
  let fixture: ComponentFixture<CalaculatorappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalaculatorappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalaculatorappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
