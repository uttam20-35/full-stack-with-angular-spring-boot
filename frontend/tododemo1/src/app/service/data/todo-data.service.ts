import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-to-do/list-to-do.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username: string): Observable <Todo[]>{
     return this.http.get<Todo[]> (`http://localhost:1010/users/${username}/todos`);
    }
}
