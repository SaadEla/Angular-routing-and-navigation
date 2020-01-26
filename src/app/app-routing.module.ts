import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


//dawi 3la hado
const routes: Routes = [
  //hena kat9olo ila kan ga3 l url khawi redirectini l hada
  {path: '', redirectTo: 'departments', pathMatch: 'full' },
  {path: 'departments', component:DepartmentListComponent},
  {path: 'departments/:id', component:DepartmentDetailComponent},
  {path:'employees', component:EmployeeListComponent},
  //hena dekhelti chi 7aja mais dik l7aja ghalta
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//exportihom mn l app-routing.module o fima tzid chi component zido hna
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentDetailComponent]
