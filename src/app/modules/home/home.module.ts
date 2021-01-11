import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorContainerComponent } from './components/instructor-container/instructor-container.component';
import { CoursesDestacadosContainerComponent } from './components/courses-destacados-container/courses-destacados-container.component';
import { InstructorService } from './services/instructor.service';


@NgModule({
  declarations: [HomepageComponent, HeaderComponent,InstructorComponent, InstructorContainerComponent,CoursesDestacadosContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers:[InstructorService]

})
export class HomeModule { }
