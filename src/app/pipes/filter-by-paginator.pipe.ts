import { Pipe, PipeTransform } from '@angular/core';
import { Foto } from '../components/views/fotos/foto/foto.model';
import { PageEvent } from '@angular/material/paginator';

@Pipe({ name: 'filterByPaginator'})
export class FilterByPaginator implements PipeTransform {

    transform(fotos: Foto[], paginatorQuery: PageEvent | undefined) {
        if(paginatorQuery == undefined){
            return fotos.filter(foto => 
                +foto.id >= 1
                && +foto.id <= 20)
        }
                
        if(paginatorQuery) {
            debugger;
            return fotos.filter(foto => 
                +foto.id >= paginatorQuery.pageIndex * paginatorQuery.pageSize
                && +foto.id < (paginatorQuery.pageIndex * paginatorQuery.pageSize) + paginatorQuery.pageSize
            );
        } else {
            return fotos;
        }
    }

}