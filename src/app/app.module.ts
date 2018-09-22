import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule, MatDialogModule } from '@angular/material';
import { AppComponent, ExportDialogComponent } from './app.component';
import { DndModule } from 'ng2-dnd';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExportDialogComponent
  ],
  entryComponents: [
    ExportDialogComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatDialogModule,
    NoopAnimationsModule,
    DndModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
