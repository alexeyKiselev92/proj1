import { Component, Input } from '@angular/core'

@Component({
    selector: 'diagram-item',
    templateUrl: './diagram-item.html',
    styleUrls: ['./diagram-item.css']
})

export class DiagramItem {
   @Input() value: number;
   @Input() name: string;
}