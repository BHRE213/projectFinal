import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMedicineCategoryComponent } from './admin-medicine-category.component';

describe('AdminMedicineCategoryComponent', () => {
  let component: AdminMedicineCategoryComponent;
  let fixture: ComponentFixture<AdminMedicineCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMedicineCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMedicineCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
