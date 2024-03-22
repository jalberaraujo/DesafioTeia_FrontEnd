import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { DialogDataModel } from "./dialog-data.model";

@Component({
    selector: 'app-comentario-dialog',
    templateUrl: './comentario-dialog.html',
    styleUrls: ['./comentario-dialog.css']

  })
  export class ComentarioDialog {
    constructor(
      public dialogRef: MatDialogRef<ComentarioDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogDataModel,
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }