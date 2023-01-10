import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskInterface } from 'src/app/interfaces/task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {

  id: number;
  task: string;
  ObjectTask: TaskInterface;
  @Output() outputTasks: EventEmitter<TaskInterface>;

  constructor() {
    this.id = 0;
    this.task = '';
    this.ObjectTask = {} as TaskInterface;
    this.outputTasks = new EventEmitter();
  }

  addTask() {
    this.ObjectTask = {
      id: this.id++,
      task: this.task,
      complete: false
    }
    this.task = '';
    this.outputTasks.emit(this.ObjectTask);
  }

}
