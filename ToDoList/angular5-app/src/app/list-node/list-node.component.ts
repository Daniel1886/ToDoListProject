import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NodeItem } from '../models/node-item';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.css']
})
export class ListNodeComponent {
  @Input() data: NodeItem;
  @Input() showAdd: boolean;

  @Output() additem = new EventEmitter<NodeItem>();

  expand = false;

  newChildItem = new FormGroup({
    newItemName: new FormControl('', Validators.minLength(2)),
  });
  newSibilingItem = new FormGroup({
    newItemName: new FormControl('', Validators.minLength(2)),
  })

  constructor() { }

  ngOnInit() {
     if(this.showAdd!=undefined)
        console.log(this.showAdd);
  }

  addNewChildItem(){
    let item:NodeItem = new NodeItem();
    item.name = String(this.newChildItem.value.newItemName);
    item.type = "";
    item.parent = this.data;
    this.data.childrens.push(item);
    this.additem.emit(item);
  }
  addNewSibilingItem(){
    let item:NodeItem = new NodeItem();
    item.name = String(this.newSibilingItem.value.newItemName);
    item.type = "";
    item.parent = this.data.parent;
    this.data.parent.childrens.push(item);
  }
}
