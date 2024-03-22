import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ComentarioDialog } from './comentario-dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{
  comentario: string = "";
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ComentarioDialog, {
      width: '500px',
      data: {comentario: this.comentario},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.comentario = result;
    });
  }

}

