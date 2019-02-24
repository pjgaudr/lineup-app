import { Component, OnInit, Inject } from '@angular/core';
import { MatIconRegistry, MatDialogConfig } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExportDialogComponent } from './export-dialog/export-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  simpleDrop: any = null;

  dragOperation = false;

  regularDefensman: Array<Widget> = [];
  regularForwards: Array<Widget> = [];
  regularGoalies: Array<Widget> = [];
  sparePlayers: Array<Widget> = [];
  teamDarkG: Container;
  teamDarkD: Container;
  teamDarkF: Container;
  teamWhiteG: Container;
  teamWhiteD: Container;
  teamWhiteF: Container;
  regularGs: Container;
  regularDs: Container;
  regularFs: Container;
  spares: Container;
  out: Container;

  widgets: Array<Widget> = [];
    addTo($event: any) {
      if ($event) {
          this.widgets.push($event.dragData);
      }
  }

  constructor(public dialog: MatDialog) {
    this.regularForwards.push(new Widget('Alain Beaulieu', 'beaulieualain@videotron.ca'));
    this.regularDefensman.push(new Widget('Alexandre Sauve', 'thrillaholic@gmail.com'));
    this.regularForwards.push(new Widget('Cory Hickey', 'hickeyccory@gmail.com'));
    this.regularForwards.push(new Widget('Eric Ladouceur', 'ladouceur.eric@gmail.com'));
    this.regularDefensman.push(new Widget('Eric Zegers', 'ejpz@hotmail.com'));
    this.regularForwards.push(new Widget('Francois Lauzon', 'francois@ekinoxe.ca'));
    this.regularDefensman.push(new Widget('Gary Walsh', 'gary.walsh@rogers.com'));
    this.regularForwards.push(new Widget('Guy Beausoleil', 'guy.beausoleil@yahoo.ca'));
    this.regularForwards.push(new Widget('Jason Maclean', 'jaymaclean@gmail.com'));
    this.regularForwards.push(new Widget('Jean-Claude Cote', 'jccote@gmail.com'));
    this.regularForwards.push(new Widget('Ken Alcock', 'zooite1059@gmail.com'));
    this.regularForwards.push(new Widget('Marc Lauzon', 'hybrid999@gmail.com'));
    this.regularForwards.push(new Widget('Mario Lefebvre', 'lefem01@yahoo.com'));
    this.regularForwards.push(new Widget('Martin Dubuc', 'martind1111@gmail.com'));
    this.regularDefensman.push(new Widget('Martin Vegiard', 'martin.vegiard@gmail.com'));
    this.regularForwards.push(new Widget('Patrick Gaudreau', 'patrick.gaudreau@gmail.com'));
    this.regularGoalies.push(new Widget('Patrick Lupien', 'patrick.lupien@gmail.com'));
    this.regularGoalies.push(new Widget('Phil Gurski', 'borealisrisk@gmail.com'));
    this.regularForwards.push(new Widget('Sebastien Dumont', 'bee13@live.ca'));
    this.regularDefensman.push(new Widget('Shervin Amid', 'swervinswervout@yahoo.com'));
    this.regularForwards.push(new Widget('Trevor Grant', 'trevorandsybil@yahoo.ca'));
    this.regularDefensman.push(new Widget('Yanick Gagnon', 'yanick.gagnon@hotmail.com'));

    this.sparePlayers.push(new Widget('Benoit Roy', 'benoitroy.x1@gmail.com'));
    this.sparePlayers.push(new Widget('Brendan Arciszewski', 'brendan.arciszewski@edu.uwaterloo.ca'));
    this.sparePlayers.push(new Widget('Bruno Lanthier', 'brunolanthier@gmail.com'));
    this.sparePlayers.push(new Widget('Dylan Waugh', 'dylwaugh@gmail.com'));
    this.sparePlayers.push(new Widget('Erik Plumadore', 'ebplumadore@gmail.com'));
    this.sparePlayers.push(new Widget('Jordy Keighan', 'jordy.keighan@gmail.com'));
    this.sparePlayers.push(new Widget('Luc Orsali', 'stapounch@gmail.com'));
    this.sparePlayers.push(new Widget('Matthew Bowen', 'bowen.matthew@gmail.com'));
    this.sparePlayers.push(new Widget('Nicholas Parnell', 'nicholas.parnell@gmail.com'));
    this.sparePlayers.push(new Widget('Paul Adams-Robenhymer', 'p.robenhymer@gmail.com'));
    this.sparePlayers.push(new Widget('Sean Drennan', 'sdrennan@hotmail.com'));

    this.teamDarkG = new Container(1, 'Dark Goalie', []);
    this.teamDarkD = new Container(2, 'Dark Defensman', []);
    this.teamDarkF = new Container(3, 'Dark Forwards', []);
    this.teamWhiteG = new Container(4, 'White Goalie', []);
    this.teamWhiteD = new Container(5, 'White Defensman', []);
    this.teamWhiteF = new Container(6, 'White Forwards', []);
    this.regularDs = new Container(7, 'Regular Defenseman', this.regularDefensman);
    this.regularFs = new Container(8, 'Regular Forwards', this.regularForwards);
    this.regularGs = new Container(9, 'Regular Goalies', this.regularGoalies);
    this.spares = new Container(10, 'Spare Players', this.sparePlayers);
    this.out = new Container(11, 'Out', []);
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ExportDialogComponent, {
      height: '400px',
      width: '250px',
      data: {teamDarkG: this.teamDarkG.widgets, teamWhiteG: this.teamWhiteG.widgets,
        teamDarkD: this.teamDarkD.widgets, teamWhiteD: this.teamWhiteD.widgets,
        teamDarkF: this.teamDarkF.widgets, teamWhiteF: this.teamWhiteF.widgets}
    });
  }
}

class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

export class Widget {
  constructor(public name: string, public email) {}
}

