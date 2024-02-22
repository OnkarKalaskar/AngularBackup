import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment3FormComponent } from './assignment3-form.component';

describe('Assignment3FormComponent', () => {
  let component: Assignment3FormComponent;
  let fixture: ComponentFixture<Assignment3FormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assignment3FormComponent]
    });
    fixture = TestBed.createComponent(Assignment3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
