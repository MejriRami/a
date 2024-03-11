import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticleslistComponent } from './articleslist/articleslist.component';

const routes: Routes = [
  
  {path : "home" , component :HomeComponent},
  {path : "articleslist" ,  component :ArticleslistComponent},
  {path :"**" , component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
