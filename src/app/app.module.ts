import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimetableComponent } from './timetable/timetable.component';
import { AddEditTaskComponent } from './timetable/add-edit-task/add-edit-task.component';
import { ShowTaskComponent } from './timetable/show-task/show-task.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormtimeComponent } from './formtime/formtime.component';
import { ShowDataComponent } from './formtime/show-data/show-data.component';
import { EditDataComponent } from './formtime/edit-data/edit-data.component';


@NgModule({
  declarations: [
    AppComponent,
    TimetableComponent,
    AddEditTaskComponent,
    ShowTaskComponent,
    FormtimeComponent,
    ShowDataComponent,
    EditDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
