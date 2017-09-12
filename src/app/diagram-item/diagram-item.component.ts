import { Component, Input } from '@angular/core'
import { DiagramItemInstance} from './diagram-item-instance';

@Component({
    selector: 'diagram-item',
    templateUrl: './diagram-item.html',
    styleUrls: ['./diagram-item.css']
})

export class DiagramItem {
   @Input() instance: DiagramItemInstance;
}