import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPackageComponent } from './ui-package.component';

describe('UiPackageComponent', () => {
  let component: UiPackageComponent;
  let fixture: ComponentFixture<UiPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
