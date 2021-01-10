import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailtPageComponent } from './course-detailt-page.component';

describe('CourseDetailtPageComponent', () => {
  let component: CourseDetailtPageComponent;
  let fixture: ComponentFixture<CourseDetailtPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDetailtPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDetailtPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
