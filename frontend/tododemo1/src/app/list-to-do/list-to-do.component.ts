import { Component } from '@angular/core';



@Component({
  selector: 'app-list-to-do',
  standalone: false,
  
  templateUrl: './list-to-do.component.html',
  styleUrl: './list-to-do.component.css'
})
export class ListToDoComponent {

  todos=[
    {id:1,desc:'learn to code'},
    {id:2,desc:'learn to java'},
    {id:3,desc:'learn to python'}
  ]

  // todo ={
  //   id:1,
  //   description:'Learn to code'
  // }
}
