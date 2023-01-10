import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { TaskInterface } from 'src/app/interfaces/task.interface';

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

  addTaskToList(task: TaskInterface) {
    this.tasks.push(task);
  }

  // Marca una tarea como completada
  completeTask(index: number) {
    this.tasks[index].complete = !this.tasks[index].complete;
  }
  // Marca una tarea como completada

  ngOnInit(): void {
  }

}
