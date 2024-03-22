import { Component, Input, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { Foto } from '../../foto/foto.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent{
      
      // MatPaginator Inputs
      @Input() outro: Foto[] = [];
      @Input() length: number = 5000;
      @Input() pageSize: number = 20;
      @Input() pageSizeOptions: number[] = [8, 20, 40, 100];

      // MatPaginator Output
      pageEvent: PageEvent | undefined;

      setPageSizeOptions(setPageSizeOptionsInput: string) {
        console.log("outro: " +this.outro);
        if (setPageSizeOptionsInput) {
          this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
      }

}
