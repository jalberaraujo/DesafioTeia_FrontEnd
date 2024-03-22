import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { FotoListaComponent } from './components/views/fotos/foto-lista/foto-lista.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
  ,
  {
    path: "fotos/foto-lista",
    component: FotoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
