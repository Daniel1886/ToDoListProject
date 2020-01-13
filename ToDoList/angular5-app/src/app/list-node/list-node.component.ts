import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-node',
  templateUrl: './list-node.component.html',
  styleUrls: ['./list-node.component.css']
})
export class ListNodeComponent {
  @Input() name: string;
}
