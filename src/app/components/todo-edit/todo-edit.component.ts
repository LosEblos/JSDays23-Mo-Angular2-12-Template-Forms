import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  public todo$: Observable<Todo>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly todoService: TodoService
  ) {}

  ngOnInit() {
    this.todo$ = this.activatedRoute.params.pipe(
      map((params) => params?.['id']),
      switchMap((id) => this.todoService.get(+id))
    );
  }

  onSubmit(todo: Todo) {
    this.todoService.update(todo).subscribe(
      () => {
        console.log('yay');
      },
      () => {
        console.log('nay');
      }
    );
  }
}
