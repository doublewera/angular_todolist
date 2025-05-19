import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {
  #tasks: Task[] = [];

  set task(description: Task) {
    this.#tasks.push(description);
  }

  constructor(private http: HttpClient) {
    this.http.get<Task[]>('/getTasks',
      {observe: 'response'}).subscribe((res) => {
        console.log(res.body);
        if (res.body) {
          for (let t of res.body) {
            console.log(t);
            this.task = new Task(t.name);
          }
        }
        // this.#tasks = res.body ? res.body : [];
        //this.#tasks = res.body ? res.body : [];
        console.log('constructor',  this.#tasks);
      }
    );
  }

  tasks_from_service(): Task [] {
    return this.#tasks;
  }
}
