import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  todos!:Todo[];

  inputTodo: string = ""

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: "First Task",
        completed: false
      },
      {
        content: "Second Task",
        completed: false
      }
      
    ]
  }

  switchCompleted (id: number) {
    this.todos.map((v, i) => { 
      if (i == id) v.completed = !v.completed; 

      return v; 
    })
  }

  removeTodo (id: number) {
    this.todos = this.todos.filter((v, i) => i !== id); 
  }

}
