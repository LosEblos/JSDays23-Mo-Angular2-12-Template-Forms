import { NgModule, InjectionToken, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { YellPipe } from './yell.pipe';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoCreateComponent } from './components/todo-create/todo-create.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ColorDirective } from './directives/color.directive';
import { ClickDirective } from './directives/click.directive';
import { TodoService } from './services/todo.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/new', component: TodoCreateComponent },
  { path: 'todos/:id', component: TodoEditComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    YellPipe,
    TodoComponent,
    TodoEditComponent,
    TodoListComponent,
    TodoCreateComponent,
    NotFoundComponent,
    ColorDirective,
    ClickDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: false }),
    FormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
