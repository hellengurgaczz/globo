import { ScreenshotsListComponent } from './screenshots/screenshots-list/screenshots-list.component';
import { HomeComponent } from './link/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLinkComponent } from './link/create-link/create-link.component';
import { DeleteLinkComponent } from './link/delete-link/delete-link.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "link/create", component: CreateLinkComponent},
  {path: "link/delete/:id", component: DeleteLinkComponent},
  {path: "screenshots", component: ScreenshotsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
