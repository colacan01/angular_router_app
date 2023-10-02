import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentWriteComponent } from './content-write.component';

describe('ContentWriteComponent', () => {
  let component: ContentWriteComponent;
  let fixture: ComponentFixture<ContentWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentWriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
