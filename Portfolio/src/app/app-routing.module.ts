import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnnisrayanbourefisComponent } from './easters/annisrayanbourefis/annisrayanbourefis.component';
import { BodyComponent } from './body/body.component';
import { DainjungComponent } from './easters/dainjung/dainjung.component';

const routes: Routes = [
  {path :'', component: BodyComponent},
  {path :'easters/annisrayanbourefis', component: AnnisrayanbourefisComponent},
  {path : 'easters/dainjung', component: DainjungComponent},
  {path : '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
