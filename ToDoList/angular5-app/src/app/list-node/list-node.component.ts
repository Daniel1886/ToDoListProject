import { Component, Input, Output, EventEmitter} from '@angular/core';
import { NodeItem } from '../models/node-item';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Enums} from '../common/enums/Enums';

@Component({
  selector: 'app-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.css']
})
export class ListNodeComponent {
  @Input() data: NodeItem;
  @Input() showAdd: boolean;
  @Input() type: Enums.NodeListType;

  @Output() additem = new EventEmitter<NodeItem>();

  expand = false;
  opanContainer = false;
  isShowingType = true;
  isAddingType = false;

  newChildItem = new FormGroup({
    newItemName: new FormControl('', Validators.minLength(2)),
  });
  newSibilingItem = new FormGroup({
    newItemName: new FormControl('', Validators.minLength(2)),
  })

  constructor() { }

  ngOnInit() {
     this.setNodeType();
  }
  setNodeType(){
    if(this.type === Enums.NodeListType.Showing){
      this.isShowingType = true;
      this.isAddingType = false;
    }else if(this.type === Enums.NodeListType.Adding){
      this.isAddingType = true;
      this.isShowingType = false;
    }   
  }

  addNewChildItem(){
    let item:NodeItem = new NodeItem();
    item.name = String(this.newChildItem.value.newItemName);
    item.type = "";
    item.parent = this.data;
    this.data.childrens.push(item);
  }
  addNewSibilingItem(){
    let item:NodeItem = new NodeItem();
    item.name = String(this.newSibilingItem.value.newItemName);
    item.type = "";
    item.parent = this.data.parent;
    this.data.childrens.push(item);
  }
  openClose(){
    this.opanContainer = !this.opanContainer;   
  }
}
