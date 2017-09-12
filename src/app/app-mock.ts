import { DiagramItem } from './diagram-item/diagram-item.component';
import { DiagramItemInstance } from './diagram-item/diagram-item-instance';


export class Generator{
    private dItems: DiagramItem[] = [];

    private static _instance: Generator;

    constructor() {
    }

    public static getInstance(){
        if (!Generator._instance){
            Generator._instance = new Generator();
        }
        return Generator._instance;
    }

    public getDiagramItems(): DiagramItem[]{
        this.dItems = [];
        var capacity = Math.random() * (7 - 1) + 1;
        for (var i = 1; i <= capacity; i++)
        {
            this.dItems.push(this.createDiagramItemInstance(Math.floor(Math.random() * (100 - 0) + 0), 'Item' + i.toString()));
        }
        return this.dItems;
    }

    createDiagramItemInstance(val: number, name: string): DiagramItem {
        let item: DiagramItem = new DiagramItem();
        item.instance = new DiagramItemInstance();
        item.instance.value = val;
        item.instance.name = name;
        return item;
    } 
}