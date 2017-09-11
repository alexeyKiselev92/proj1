import { Component, OnInit } from '@angular/core';
import { DiagramItem } from './diagram-item/diagram-item.component';
import { DiagramService } from './app.service';

@Component({
  selector: 'diagram-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DiagramService]
})
export class AppComponent implements OnInit{
  title = 'diagram';
  items: DiagramItem[];

  constructor(private diagramService: DiagramService){}

  onUpdate(): void {
    this.diagramService.update().then(items=> this.items = items);
  }

  ngOnInit() : void{
    this.onUpdate();
  }
}
