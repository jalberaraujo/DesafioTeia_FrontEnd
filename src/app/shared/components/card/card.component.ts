import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent { 
  @Input() title: string = '';
  @Input() url: string = '';
  ehFavorito: boolean = false;

  favoritar(){
    this.ehFavorito = this.ehFavorito? false : true;
    console.log(this.ehFavorito);
  }
  
}


