import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactopageComponent } from './pages/contactopage/contactopage.component';

const routes: Routes = [
  {
    path: '',
    component: ContactopageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
