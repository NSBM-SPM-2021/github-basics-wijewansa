import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {TimetableComponent} from './timetable/timetable.component';
import {FormtimeComponent} from './formtime/formtime.component';

const routes: Routes = [
  {path:'timetable',component:TimetableComponent},
  {path:'formtime',component:FormtimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
