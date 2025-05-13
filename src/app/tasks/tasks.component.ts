import { Component } from '@angular/core';
import { Task } from './task';
import { WorklistService } from './worklist.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[];
  //nameChange: Subject<string> = new Subject<string>();
  constructor(service: WorklistService) {
    this.tasks = service.tasks_from_service();
  }

}
