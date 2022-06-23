import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdderComponent } from './admin-ordder.component';

describe('AdminOrdderComponent', () => {
  let component: AdminOrdderComponent;
  let fixture: ComponentFixture<AdminOrdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrdderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
