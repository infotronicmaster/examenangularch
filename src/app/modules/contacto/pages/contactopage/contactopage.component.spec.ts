import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactopageComponent } from './contactopage.component';

describe('ContactopageComponent', () => {
  let component: ContactopageComponent;
  let fixture: ComponentFixture<ContactopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
