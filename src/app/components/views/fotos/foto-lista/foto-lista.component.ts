import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { Foto } from '../foto/foto.model';

@Component({
  selector: 'app-foto-lista',
  templateUrl: './foto-lista.component.html',
  styleUrls: ['./foto-lista.component.css']
})
export class FotoListaComponent implements OnInit {

  fotos: Foto[] = [];
  filter: string = '';
  hasMore: boolean = true;

  constructor(private fotoService: FotoService) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.fotoService
      .findAll()
      .subscribe(fotos => {
        this.filter = '';
        this.fotos = this.fotos.concat(fotos);
        if(!fotos.length) this.hasMore = false;
      });
  }

}
