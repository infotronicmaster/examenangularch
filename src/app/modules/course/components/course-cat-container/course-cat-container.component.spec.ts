import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCatContainerComponent } from './course-cat-container.component';

describe('CourseCatContainerComponent', () => {
  let component: CourseCatContainerComponent;
  let fixture: ComponentFixture<CourseCatContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseCatContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCatContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
