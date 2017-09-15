import { Component, OnInit } from '@angular/core';
import { DiagramItem } from './diagram-item/diagram-item.component';
import { DiagramService } from './app.service';
import { Observable } from 'rxjs/Rx';
import { DiagramComponent } from "./diagram-component/diagram-component";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DiagramService]
})
export class AppComponent implements OnInit{
  diagram: DiagramComponent;
  service: DiagramService;

  ngOnInit(){
    this.service = new DiagramService();
    this.diagram = new DiagramComponent(this.service);
  }
}
