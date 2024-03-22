import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Foto } from '../../foto/foto.model';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnChanges {
  
  @Input() fotos: Foto[] = [];
  // @Input() page: PageEvent | undefined;
  rows: any[] = [];
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    if(changes['fotos']) 
      this.rows = this.groupColumns(this.fotos);
  }

  groupColumns(fotos: Foto[]) {
    const newRows = [];

    for(let index = 0; index < this.fotos.length; index+=4) {
      newRows.push(fotos.slice(index, index + 4));
    }                            
    return newRows;
  }
}