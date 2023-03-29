import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCDsComponent } from './list-cds/list-cds.component';
import { CdComponent } from './cd/cd.component';
import { NewCDComponent } from './new-cd/new-cd.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: ListCDsComponent },
  { path: 'cd/:id', component: CdComponent },
  { path: 'nouveaucd', component: NewCDComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) // j'utilise les routes définies dans la constante routes
  ],
  exports: [RouterModule] // si je fais pas ca, je ne peux pas utiliser les routes dans d'autres modules
})
export class AppRoutingModule { }
