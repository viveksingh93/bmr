import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesActivationComponent } from './packages-activation.component';

describe('PackagesActivationComponent', () => {
  let component: PackagesActivationComponent;
  let fixture: ComponentFixture<PackagesActivationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesActivationComponent]
    });
    fixture = TestBed.createComponent(PackagesActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
