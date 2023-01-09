import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  // Variables
  id: number;
  task: string;
  tasks: Array<TaskInterface>;

  constructor() {
    this.id = 0;
    this.task = '';
    this.tasks = [];
  }

  // Agrega una tarea
  addTask() {
    this.tasks.push(
      {
        id: this.id++,
        task: this.task,
        complete: false
      }
    );
    this.task = '';
  }
  // Agrega una tarea

  // Marca una tarea como completada
  completeTask(index: number) {
    this.tasks[index].complete = !this.tasks[index].complete;
  }
  // Marca una tarea como completada

  ngOnInit(): void {
  }

}

export interface TaskInterface {
  id: number,
  task: string,
  complete: boolean
}
