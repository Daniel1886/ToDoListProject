export class NodeItem {
    name: string;
    type: string;
    parent: NodeItem;
    childrens: NodeItem[] = [];
}