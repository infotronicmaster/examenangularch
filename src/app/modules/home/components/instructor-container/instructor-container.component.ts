import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { IInstructor } from '../instructor/interfaces/instructor';

@Component({
  selector: 'app-instructor-container',
  templateUrl: './instructor-container.component.html',
  styleUrls: ['./instructor-container.component.scss']
})
export class InstructorContainerComponent implements OnInit {
 listInetructor: IInstructor[];

  constructor(private varinstructor: InstructorService) { }

  ngOnInit(): void {
    this.getinstructor();

  }

  getinstructor() {
    this.varinstructor.getInstructor()
      .subscribe((res: IInstructor[]) => {
        console.log(res);
        
        this.listInetructor = res;
      }
      );
  }


}
