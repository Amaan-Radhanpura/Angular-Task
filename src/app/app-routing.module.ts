import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropepertylistComponent } from './propepertylist/propepertylist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"products", component:PropepertylistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
