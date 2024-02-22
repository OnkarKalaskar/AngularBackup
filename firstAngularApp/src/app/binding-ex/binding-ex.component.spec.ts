import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExComponent } from './binding-ex.component';

describe('BindingExComponent', () => {
  let component: BindingExComponent;
  let fixture: ComponentFixture<BindingExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindingExComponent]
    });
    fixture = TestBed.createComponent(BindingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
