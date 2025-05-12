import { Component } from '@angular/core';
import { Task } from './task';
import { WorklistService } from './worklist.service';

@Component({
  selector: 'app-tasks',
  imports: [],
  providers: [
    WorklistService
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = (new WorklistService()).tasks_from_service();

  finishTask(item: Task) {
      item.isComplete = true;
  }
}
