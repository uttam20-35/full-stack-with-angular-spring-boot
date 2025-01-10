import { Component } from '@angular/core';


export class Todo{
  constructor(
    public id: number,
    public desc: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-list-to-do',
  standalone: false,
  
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})
export class ListToDoComponent {

  todos=[
    new Todo(1,'Learn to Code', false,new Date()),
    new Todo(2,'Learn to Code', false,new Date()),
    new Todo(3,'Learn to Code', false,new Date()),
    new Todo(4,'Learn to Code', false,new Date())
    // {id:1,desc:'learn to code'},
    // {id:2,desc:'learn to java'},
    // {id:3,desc:'learn to python'}
  ]

  // todo ={
  //   id:1,
  //   description:'Learn to code'
  // }
}
