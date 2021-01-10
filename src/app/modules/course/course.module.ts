import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';
import { CourseComponent } from './components/course/course.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { CourseDetailtPageComponent } from './pages/course-detailt-page/course-detailt-page.component';


@NgModule({
  declarations: [CoursepageComponent, CourseComponent, CourseContainerComponent, InstructorComponent, InstructorContainerComponent, CourseDetailtPageComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
