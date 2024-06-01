import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarcompanyComponent } from './carcompany.component';

describe('CarcompanyComponent', () => {
  let component: CarcompanyComponent;
  let fixture: ComponentFixture<CarcompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarcompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
