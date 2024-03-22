import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
     @Input() filteredTitle: string = "";
     @Output() filteredTitleChange = new EventEmitter();

    constructor(){}

    ngOnInit(){
    }

    onTitleChange(){
        this.filteredTitleChange.emit(this.filteredTitle);
    }

 }