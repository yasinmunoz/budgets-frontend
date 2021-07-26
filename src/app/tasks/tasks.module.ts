import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';



@NgModule({
  declarations: [
    TaskComponent,
    TasksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
