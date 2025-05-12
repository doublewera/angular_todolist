import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { WorklistService } from './tasks/worklist.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, TasksComponent ],
  providers: [
    WorklistService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wera';
}
