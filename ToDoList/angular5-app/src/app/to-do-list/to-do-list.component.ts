import { Component, OnInit } from '@angular/core';
import { NodeItem } from '../models/node-item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  data : NodeItem = new NodeItem();
  constructor() { }

  ngOnInit() {
    let parent:NodeItem = new NodeItem();
    parent.name = "cos";
    
    let childA:NodeItem = new NodeItem();
    childA.name ="childcosA"
    childA.parent = parent;

    let childB:NodeItem = new NodeItem();
    childB.name ="childcosA"
    childB.parent = parent;

    parent.childrens.push(childB);
    parent.childrens.push(childA);

    this.data.childrens.push(parent);
    console.log(this.data);
  }

  addNewItem(event){
    console.log("parent");
    console.log(this.data);
    //let lastElem = this.data[this.data.length -1];
    //this.data[this.data.length -1] = event;
    //this.data.push(lastElem);
  }

}
