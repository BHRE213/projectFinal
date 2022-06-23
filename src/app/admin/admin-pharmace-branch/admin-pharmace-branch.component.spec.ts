import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPharmaceBranchComponent } from './admin-pharmace-branch.component';

describe('AdminPharmaceBranchComponent', () => {
  let component: AdminPharmaceBranchComponent;
  let fixture: ComponentFixture<AdminPharmaceBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPharmaceBranchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPharmaceBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
