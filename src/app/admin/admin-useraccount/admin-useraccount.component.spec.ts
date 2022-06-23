import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUseraccountComponent } from './admin-useraccount.component';

describe('AdminUseraccountComponent', () => {
  let component: AdminUseraccountComponent;
  let fixture: ComponentFixture<AdminUseraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUseraccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
