import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShareddatumComponent } from './admin-shareddatum.component';

describe('AdminShareddatumComponent', () => {
  let component: AdminShareddatumComponent;
  let fixture: ComponentFixture<AdminShareddatumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShareddatumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminShareddatumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
