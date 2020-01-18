import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  data = [{
    name:"potem",
    type:""
  },
  {
    name:"cos",
    type:""
  },
  {
    name:"robic",
    type:""
  },
  {
    name:"",
    type:"expand"
  }];
  constructor() { }

  ngOnInit() {
  }
  addNewItem(event){
    let lastElem = this.data[this.data.length -1];
    this.data[this.data.length -1] = event;
    this.data.push(lastElem);
  }

}
