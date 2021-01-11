import { Component, OnInit } from '@angular/core';
import { ICurso } from 'src/app/shared/interfaces/curso';
import { CursosDestacadosService } from '../../services/cursos-destacados.service';

@Component({
  selector: 'app-courses-destacados-container',
  templateUrl: './courses-destacados-container.component.html',
  styleUrls: ['./courses-destacados-container.component.scss']
})
export class CoursesDestacadosContainerComponent implements OnInit {
  listCursosd: ICurso[];

  constructor(private varcursosd: CursosDestacadosService) { }

  ngOnInit(): void {
    this.getcursosd();
  }
  getcursosd() {
    this.varcursosd.getcursosd()
      .subscribe((res: ICurso[]) => {
        console.log(res);
        
        this.listCursosd = res;
      }
      );
  }

}
