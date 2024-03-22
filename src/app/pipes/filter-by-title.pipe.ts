import { Pipe, PipeTransform } from '@angular/core';
import { Foto } from '../components/views/fotos/foto/foto.model';

@Pipe({ name: 'filterByTitle'})
export class FilterByTitle implements PipeTransform {

    transform(fotos: Foto[], titleQuery: string) {
        titleQuery = titleQuery
            .trim()
            .toLowerCase();

        if(titleQuery) {
            return fotos.filter(foto => 
                foto.title.toLowerCase().includes(titleQuery)
            );
        } else {
            return fotos;
        }
    }

}