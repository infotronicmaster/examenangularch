import { TestBed } from '@angular/core/testing';

import { CursosDestacadosService } from './cursos-destacados.service';

describe('CursosDestacadosService', () => {
  let service: CursosDestacadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursosDestacadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
