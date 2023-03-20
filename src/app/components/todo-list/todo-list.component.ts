import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private readonly todoService: TodoService) {}

  ngOnInit() {
    this.todos$ = this.todoService.getAll();
  }

  catchDoneEvent(todo: any) {
    console.log(todo);
  }
}
