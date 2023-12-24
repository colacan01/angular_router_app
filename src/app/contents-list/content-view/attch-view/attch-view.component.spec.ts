import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttchViewComponent } from './attch-view.component';

describe('AttchViewComponent', () => {
  let component: AttchViewComponent;
  let fixture: ComponentFixture<AttchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttchViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
