import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { SelectElementsComponent } from './components/select-elements/select-elements.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ApiComponent } from './components/api/api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    AddTaskComponent,
    SelectElementsComponent,
    FormularioComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
