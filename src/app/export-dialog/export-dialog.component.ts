import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Widget } from '../app.component';

export interface DialogData {
    teamDark: Array<Widget>;
    teamWhite: Array<Widget>;
  }
  
  @Component({
    selector: 'app-export-dialog',
    templateUrl: './export-dialog.component.html',
    styleUrls: ['./export-dialog.component.css']
  })
  export class ExportDialogComponent implements OnInit {
    fullLineup = '';
    toline = '';
  
    constructor(
      public dialogRef: MatDialogRef<ExportDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  
      this.fullLineup += 'Dark (low room #)\n\n';
  
      let arrayLength = data.teamDark.length;
      if(arrayLength > 0)
        this.fullLineup += data.teamDark[0].name + " (G)\n";
      for (let i = 1; i < arrayLength; i++) {
        this.fullLineup += data.teamDark[i].name;
        this.fullLineup += '\n';
        this.toline += data.teamDark[i].email + '; ';
      }
  
      this.fullLineup += '\nWhite (high room #)\n\n';
  
      arrayLength = data.teamWhite.length;
      if(arrayLength > 0)
        this.fullLineup += data.teamWhite[0].name + " (G)\n";
      for (let i = 1; i < arrayLength; i++) {
        this.fullLineup += data.teamWhite[i].name;
        this.fullLineup += '\n';
        this.toline += data.teamWhite[i].email + '; ';
      }
  
    }
  
    closeDialog(): void {
      this.dialogRef.close();
    }
  
    ngOnInit() {
    }
  
  }
  

