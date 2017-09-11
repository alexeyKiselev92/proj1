import { Injectable } from '@angular/core';
import { DiagramItem } from './diagram-item/diagram-item.component';
import { ITEMS } from './app-mock';

@Injectable()
export class DiagramService{
    update(): Promise<DiagramItem[]> {
        return Promise.resolve(ITEMS);
    }
}