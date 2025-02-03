import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';


export class Todo{
  constructor(
    public id: number,
    public username: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
    
  ){}
}

@Component({
  selector: 'app-list-to-do',
  standalone: false,
  
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})
export class ListToDoComponent {

  todos: Todo[] | undefined 

  message: string ='' 
  // =[   new Todo(1,'Learn to Code', false,new Date()),new Todo(2,'Learn to Code',false,new Date()), new Todo(3,'Learn to Code', false,new Date()),   new Todo(4,'Learn to Code', false,new Date()){id:1,desc:'learn to code'},{id:2,desc:'learn to java'},{id:3,desc:'learn to python'}] todo ={id:1,description:'Learn to code'} =[new Todo(1,'Learn to Code', false,new Date()),new Todo(2,'Learn to Code', false,new Date()),   new Todo(3,'Learn to Code', false,new Date()),new Todo(4,'Learn to Code', false,new Date()){id:1,desc:'learn to code'},
  //{id:2,desc:'learn to java'},{id:3,desc:'learn to python'}] todo ={id:1,description:'Learn to code'}

  constructor(
    private todoService:TodoDataService
  ){}

  ngOnInit(){
    this.todoService.retrieveAllTodos('uttam').subscribe(
      (response: Todo[])  => {
        this.todos = response;
        // console.log('1st :',response); console.log(response[0].done);console.log('2st :',response[1].username);console.log('3rd :',response[2].done);
      }
    )
  }

  deleteToDo(id: number){
    console.log(`delete todo ${id}`)
    this.todoService.deleteToDo('uttam', id).subscribe(
      response => {
        console.log(response);
        this.message=`Delete of ToDo  ${id} successful`
      }
    )
  }
}