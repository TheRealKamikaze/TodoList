import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Todo} from '../models/Todo';
import {Observable } from 'rxjs';

const httpOptions={
	headers: new HttpHeaders({
		'content-type': 'application/json' 
	})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
	todosUrl: String= 'https://jsonplaceholder.typicode.com/todos';
  	todosLimit: String = '?_limit=5'
  constructor(private http: HttpClient) { }

  getTodos():Observable<Todo[]>{
  	return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  toggleCompleted(todo: Todo):Observable<any>{
  	const url = `${this.todosUrl}/${todo.id}`;
  	return this.http.put(url,todo,httpOptions)
}

	deleteTodo(todo:Todo):Observable<any> {
	// console.log("in")
	const url = `${this.todosUrl}/${todo.id}`;
  	return this.http.delete(url,httpOptions);

	}

  //add todo
  addTodo(todo:Todo):Observable<Todo>{

    return this.http.post<Todo>(this.todosUrl,todo,httpOptions);
  }


}
