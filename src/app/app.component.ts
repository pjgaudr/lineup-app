import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry, MatDialogConfig } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  simpleDrop: any = null;

  dragOperation = false;

  regularPlayers: Array<Widget> = [];
  sparePlayers: Array<Widget> = [];
  teamDark: Container;
  teamWhite: Container;
  regulars: Container;
  spares: Container;
  out: Container;

  widgets: Array<Widget> = [];
    addTo($event: any) {
      if ($event) {
          this.widgets.push($event.dragData);
      }
  }

  constructor(public dialog: MatDialog) {
    this.regularPlayers.push(new Widget('Alain Beaulieu', 'beaulieualain@videotron.ca'));
    this.regularPlayers.push(new Widget('Alexandre Sauve', 'thrillaholic@gmail.com'));
    this.regularPlayers.push(new Widget('Cory Hickey', 'hickeyccory@gmail.com'));
    this.regularPlayers.push(new Widget('Eric Ladouceur', 'ladouceur.eric@gmail.com'));
    this.regularPlayers.push(new Widget('Eric Zegers', 'ejpz@hotmail.com'));
    this.regularPlayers.push(new Widget('Francois Lauzon', 'francois@ekinoxe.ca'));
    this.regularPlayers.push(new Widget('Gary Walsh', 'gary.walsh@rogers.com'));
    this.regularPlayers.push(new Widget('Guy Beausoleil', 'guy.beausoleil@yahoo.ca'));
    this.regularPlayers.push(new Widget('Jason Maclean', 'jaymaclean@gmail.com'));
    this.regularPlayers.push(new Widget('Jean-Claude Cote', 'jccote@gmail.com'));
    this.regularPlayers.push(new Widget('Ken Alcock', 'zooite1059@gmail.com'));
    this.regularPlayers.push(new Widget('Marc Lauzon', 'hybrid999@gmail.com'));
    this.regularPlayers.push(new Widget('Mario Lefebvre', 'lefem01@yahoo.com'));
    this.regularPlayers.push(new Widget('Martin Dubuc', 'martind1111@gmail.com'));
    this.regularPlayers.push(new Widget('Martin Vegiard', 'martin.vegiard@gmail.com'));
    this.regularPlayers.push(new Widget('Patrick Gaudreau', 'patrick.gaudreau@gmail.com'));
    this.regularPlayers.push(new Widget('Patrick Lupien', 'patrick.lupien@gmail.com'));
    this.regularPlayers.push(new Widget('Phil Gurski', 'borealisrisk@gmail.com'));
    this.regularPlayers.push(new Widget('Sebastien Dumont', 'bee13@live.ca'));
    this.regularPlayers.push(new Widget('Shervin Amid', 'swervinswervout@yahoo.com'));
    this.regularPlayers.push(new Widget('Trevor Grant', 'trevorandsybil@yahoo.ca'));
    this.regularPlayers.push(new Widget('Yanick Gagnon', 'yanick.gagnon@hotmail.com'));

    this.sparePlayers.push(new Widget('Benoit Roy', 'benoitroy.x1@gmail.com'));
    this.sparePlayers.push(new Widget('Bruno Lanthier', 'brunolanthier@gmail.com'));
    this.sparePlayers.push(new Widget('Jordy Keighan', 'jordy.keighan@gmail.com'));
    this.sparePlayers.push(new Widget('Luc Orsali', 'stapounch@gmail.com'));
    this.sparePlayers.push(new Widget('Matthew Bowen', 'bowen.matthew@gmail.com'));

    this.teamDark = new Container(1, 'Team Dark', []);
    this.teamWhite = new Container(2, 'Team White', []);
    this.regulars = new Container(3, 'Regular Players', this.regularPlayers);
    this.spares = new Container(4, 'Spare Players', this.sparePlayers);
    this.out = new Container(5, 'Out', []);
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExportDialogComponent, {
      // position: {
      //   'top': '0',
      //   left: '0'
      // },
      height: '400px',
      width: '250px',
      data: {teamDark: this.teamDark.widgets, teamWhite: this.teamWhite.widgets}
    });
  }
}

class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

export class Widget {
  constructor(public name: string, public email) {}
}

export interface DialogData {
  teamDark: Array<Widget>;
  teamWhite: Array<Widget>;
}

@Component({
  selector: 'app-export-dialog',
  templateUrl: './export-dialog/export-dialog.component.html',
  styleUrls: ['./export-dialog/export-dialog.component.css']
})
export class ExportDialogComponent implements OnInit {
  fullLineup = '';

  constructor(
    public dialogRef: MatDialogRef<ExportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    this.fullLineup += 'Dark (low room #)\n\n';

    let arrayLength = data.teamDark.length;
    for (let i = 0; i < arrayLength; i++) {
      console.log(data.teamDark[i]);
      this.fullLineup += data.teamDark[i].name;
      this.fullLineup += '\n';
    }

    this.fullLineup += '\nWhite (high room #)\n\n';

    arrayLength = data.teamWhite.length;
    for (let i = 0; i < arrayLength; i++) {
      console.log(data.teamWhite[i]);
      this.fullLineup += data.teamWhite[i].name;
      this.fullLineup += '\n';
    }
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
