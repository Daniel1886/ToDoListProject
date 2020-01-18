import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NodeItem } from '../models/node-item';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.css']
})
export class ListNodeComponent {
  @Input() name: string;
  @Input() type: string;

  @Output() additem = new EventEmitter<NodeItem>();

  expand = false;

  newItemForm = new FormGroup({
    newItemName: new FormControl('', Validators.minLength(2)),
  });

  constructor() { }

  ngOnInit() {
    if(this.type == "expand"){
        this.expand = true;
    }
  }

  addNewItem(){
    let item:NodeItem = new NodeItem();
    item.name = String(this.newItemForm.value.newItemName);
    item.type = "";
    this.additem.emit(item);
  }
}
