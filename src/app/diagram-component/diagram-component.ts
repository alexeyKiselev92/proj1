import { Component, OnInit } from '@angular/core';
import { DiagramItem } from '../diagram-item/diagram-item.component';
import { DiagramItemInstance } from '../diagram-item/diagram-item-instance';
import { DiagramService } from '../app.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'diagram-component',
  templateUrl: './diagram-component.html',
  styleUrls: ['./diagram-component.css'],
  providers: [DiagramService]
})
export class DiagramComponent implements OnInit{
  title = 'diagram';
  items: DiagramItemInstance[];

  constructor(private diagramService: DiagramService){}

  onUpdate(): void {
    //this.diagramService.update().then(items=> this.items = items);
    this.diagramService.getDiagramItemsObservable().subscribe(data => this.items = data);

    
  }

  ngOnInit() : void{
    this.onUpdate();
  }
}