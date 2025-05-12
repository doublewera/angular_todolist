import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {
  #tasks: Task[] = [];

  constructor() {
    this.#tasks = [
      { id: 1, name: 'Commit changes', isComplete:false },
      { id: 2, name: 'Do my homework', isComplete:false },
      { id: 3, name: 'Prepare presentation', isComplete:false },
      { id: 4, name: 'Send email', isComplete:false },
      { id: 5, name: 'Buy products', isComplete:false },
      { id: 6, name: 'Lunch with Mom', isComplete:true },
      { id: 7, name: 'Start learning Angular',  isComplete:false },
      { id: 9, name: 'Feed my dog', isComplete:false }
     ];
  }

  tasks_from_service(): Task [] {
    return this.#tasks;
  }
}
