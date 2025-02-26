import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-to-do/list-to-do.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatedtodo',
  standalone: false,
  
  templateUrl: './updatedtodo.component.html',
  styleUrl: './updatedtodo.component.css'
})
export class UpdatedtodoComponent implements OnInit {

  id!: number;
  todo!: Todo

  constructor(
    private todoService : TodoDataService,
    private route : ActivatedRoute,
    private router :Router
  ){}

  ngOnInit() {
    this.id =this.route.snapshot.params['id'];
    this.todo=new Todo(1,'', new Date(),false )
    this.todoService.retrieveToDo('uttam',this.id)
    .subscribe(
      data => this.todo =data
    )
    throw new Error('Method not implemented.');
  }

  saveTodo() {
    this.todoService.updateToDo('uttam',this.id,this.todo).subscribe(
      data =>{
        console.log(data);    
        this.router.navigate(['todos'])
      }
    )
    {}
  throw new Error('Method not implemented.');
  }

}
