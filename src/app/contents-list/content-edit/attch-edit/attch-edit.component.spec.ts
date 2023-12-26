import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttchEditComponent } from './attch-edit.component';

describe('AttchEditComponent', () => {
  let component: AttchEditComponent;
  let fixture: ComponentFixture<AttchEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttchEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttchEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
