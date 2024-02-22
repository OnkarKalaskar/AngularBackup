import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperchildcomponentComponent } from './superchildcomponent.component';

describe('SuperchildcomponentComponent', () => {
  let component: SuperchildcomponentComponent;
  let fixture: ComponentFixture<SuperchildcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperchildcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperchildcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
