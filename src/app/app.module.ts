import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DiagramService } from './app.service';
import { DiagramItem } from './diagram-item/diagram-item.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    DiagramItem
  ],
  providers: [DiagramService],
  bootstrap: [AppComponent]
})
export class AppModule { }
