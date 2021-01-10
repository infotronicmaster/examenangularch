import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDestacadosContainerComponent } from './courses-destacados-container.component';

describe('CoursesDestacadosContainerComponent', () => {
  let component: CoursesDestacadosContainerComponent;
  let fixture: ComponentFixture<CoursesDestacadosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesDestacadosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDestacadosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
