import { Injectable } from '@angular/core';
import { Generator } from './app-mock';
import { DiagramItem } from './diagram-item/diagram-item.component';


@Injectable()
export class DiagramService{
    update(): Promise<DiagramItem[]> {
        return Promise.resolve(Generator.getInstance().getDiagramItems());
    }
}