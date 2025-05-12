import { Injectable } from '@angular/core';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorklistService {
  #tasks: Task[] = [];

  constructor(private http: HttpClient) {
    this.http.get<Task[]>('/getTasks',
      {observe: 'response'}).subscribe((res) => {
        console.log(res.body);
        // this.#tasks = res.body ? res.body : [];
        this.#tasks = res.body ? res.body : [];
        console.log('constructor',  this.#tasks);
      }
    );
  }

  ngOnInit() {
    this.http.get<Task[]>('/getTasks',
      {observe: 'response'}).subscribe((res) => {
        //console.log(res.body);
        this.#tasks = res.body ? res.body : [];
        console.log('onInit',  this.#tasks);
      }
    );
  }

  tasks_from_service(): Task [] {
    return this.#tasks;
  }
}
