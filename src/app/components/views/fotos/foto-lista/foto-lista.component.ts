import { Component, OnInit, ViewChild } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { Foto } from '../foto/foto.model';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit {

  fotos: Foto[] = [];
  filter: string = '';
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pgIndex = 0;
  pgSize = 20;

  constructor(private fotoService: FotoService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.fotoService
      .findAll()
      .subscribe(fotos => {
        this.filter = '';
        this.fotos = fotos;
      });
  }

}
