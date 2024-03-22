import { Component, OnInit, ViewChild } from "@angular/core";
import { FotoService } from "../foto/foto.service";
import { Foto } from "../foto/foto.model";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-foto-lista",
  templateUrl: "./foto-lista.component.html",
  styleUrls: ["./foto-lista.component.css"],
})
export class FotoListaComponent implements OnInit {
  fotos: Foto[] = [];
  pageEvent: PageEvent | undefined;

  length: number = 5000;
  pageIndex: number = 0;
  pageSize: number = 20;

  pageSizeOptions: number[] = [8, 20, 40, 100];
  filteredTitle = "";
  constructor(private fotoService: FotoService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.fotoService.findAll().subscribe((fotos) => {
      this.fotos = fotos;
    });
  }

  setPageSizeOptions(event: PageEvent) {
    debugger;
    this.pageEvent = event;
    this.length = event.length;
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;

    debugger;
    console.log(event);
    console.log("event teste");
  }
}
