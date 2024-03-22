import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { FotoListaComponent } from './components/views/fotos/foto-lista/foto-lista.component';

const routes: Routes = [
  {
    path: "",
    component: FotoListaComponent
  },
  {
    path: "fotos/foto-lista",
    component: FotoListaComponent
  },
  {
    path: "home",
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
