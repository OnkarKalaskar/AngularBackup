import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSalaryComponent } from './get-salary.component';

describe('GetSalaryComponent', () => {
  let component: GetSalaryComponent;
  let fixture: ComponentFixture<GetSalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetSalaryComponent]
    });
    fixture = TestBed.createComponent(GetSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
