import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { HomeComponent } from "./components/views/home/home.component";
import { MatCardModule } from "@angular/material/card";
import { FotoComponent } from "./components/views/fotos/foto/foto.component";
import { FotoListaComponent } from "./components/views/fotos/foto-lista/foto-lista.component";
import { FotosComponent } from "./components/views/fotos/foto-lista/fotos/fotos.component";
import { CardComponent } from "./shared/components/card/card.component";
import { DarkenOnHoverDirective } from "./shared/directives/darken-on-hover.directive";
import { FilterByTitle } from "./components/views/fotos/foto-lista/filter-by-title.pipe";
import { SearchComponent } from "./components/views/fotos/foto-lista/search/search.component";
import { PaginatorComponent } from './components/views/fotos/foto-lista/paginator/paginator.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { ComentarioDialog } from "./shared/components/dialog/comentario-dialog";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FotoComponent,
    FotoListaComponent,
    FotosComponent,
    CardComponent,
    DarkenOnHoverDirective,
    FilterByTitle,
    SearchComponent,
    PaginatorComponent,
    DialogComponent,
    ComentarioDialog,
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
