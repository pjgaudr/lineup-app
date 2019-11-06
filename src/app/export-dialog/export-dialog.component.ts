import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Widget } from '../app.component';

declare function sendEmail():any;

export interface DialogData {
    teamDarkG: Array<Widget>;
    teamDarkD: Array<Widget>;
    teamDarkF: Array<Widget>;
    teamWhiteG: Array<Widget>;
    teamWhiteD: Array<Widget>;
    teamWhiteF: Array<Widget>;
  }

  @Component({
    selector: 'app-export-dialog',
    templateUrl: './export-dialog.component.html',
    styleUrls: ['./export-dialog.component.css']
  })
  export class ExportDialogComponent implements OnInit {
    fullLineup = '';
    toline = '';
    subject = 'NNHL Lineups'

    constructor(
      public dialogRef: MatDialogRef<ExportDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {

      this.fullLineup += 'Game starts at 11am\n\n';
      this.fullLineup += 'Dark (low room #)\n\n';

      let arrayLength = data.teamDarkG.length;
      if(arrayLength > 0)
      {
        this.fullLineup += "G: " + data.teamDarkG[0].name + "\n";
        this.toline += data.teamDarkG[0].email + '; ';
      }
      arrayLength = data.teamDarkD.length;
      for (let i = 0; i < arrayLength; i++) {
        this.fullLineup += "D: " + data.teamDarkD[i].name + '\n';
        this.toline += data.teamDarkD[i].email + '; ';
      }
      arrayLength = data.teamDarkF.length;
      for (let i = 0; i < arrayLength; i++) {
        this.fullLineup += "F: " + data.teamDarkF[i].name + '\n';
        this.toline += data.teamDarkF[i].email + '; ';
      }

      this.fullLineup += '\nWhite (high room #)\n\n';

      arrayLength = data.teamWhiteG.length;
      if(arrayLength > 0)
      {
        this.fullLineup += "G: " + data.teamWhiteG[0].name + "\n";
        this.toline += data.teamWhiteG[0].email + '; ';
      }
      arrayLength = data.teamWhiteD.length;
      for (let i = 0; i < arrayLength; i++) {
        this.fullLineup += "D: " + data.teamWhiteD[i].name + '\n';
        this.toline += data.teamWhiteD[i].email + '; ';
      }
      arrayLength = data.teamWhiteF.length;
      for (let i = 0; i < arrayLength; i++) {
        this.fullLineup += "F: " + data.teamWhiteF[i].name + '\n';
        this.toline += data.teamWhiteF[i].email + '; ';
      }
    }

    closeDialog(): void {
      this.dialogRef.close();
    }

    sendEmailAndClose(): void {
      sendEmail();
      this.dialogRef.close();
    }

    ngOnInit() {
    }

  }


