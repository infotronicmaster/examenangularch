import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';
import { CourseContainerComponent } from './components/course-container/course-container.component';
import { CourseCatContainerComponent } from './components/course-cat-container/course-cat-container.component';
import { CourseDetailtPageComponent } from './pages/course-detailt-page/course-detailt-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CoursepageComponent, CourseContainerComponent, CourseDetailtPageComponent, CourseCatContainerComponent],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule 
  ]
})
export class CourseModule { }
