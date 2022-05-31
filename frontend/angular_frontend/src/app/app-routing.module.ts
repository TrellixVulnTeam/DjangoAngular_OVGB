import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeeComponent} from './employee/employee.component'
import {DepartmentComponent} from './department/department.component'
import {CarouselComponent} from './carousel/carousel.component'

const routes: Routes = [
  {path: 'employee',component: EmployeeComponent},
  {path: 'department',component: DepartmentComponent},
  {path: 'carousel',component: CarouselComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
