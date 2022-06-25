import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSitedatumComponent } from './admin-sitedatum.component';

describe('AdminSitedatumComponent', () => {
  let component: AdminSitedatumComponent;
  let fixture: ComponentFixture<AdminSitedatumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSitedatumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSitedatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
