import { Injectable } from '@angular/core';
import { Generator } from './app-mock';
import { DiagramItem } from './diagram-item/diagram-item.component';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class DiagramService{

    update(): Promise<DiagramItem[]> {
        return Promise.resolve(Generator.getInstance().getDiagramItems());
    }

    public getDiagramItemsObservable(){
        return Observable.create(observer => {
            observer.next(Generator.getInstance().getDiagramItems());
            observer.complete();
        })
    }
}