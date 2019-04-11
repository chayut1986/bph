import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugallergyComponent } from './drugallergy.component';

describe('DrugallergyComponent', () => {
  let component: DrugallergyComponent;
  let fixture: ComponentFixture<DrugallergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugallergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugallergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
