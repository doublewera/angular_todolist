import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  task: Task = {
    id: 1,
    name: "Commit changes",
    isComplete: false
  };
}
