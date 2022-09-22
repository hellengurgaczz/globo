import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLinkComponent } from './link/create-link/create-link.component';
import { ListLinkComponent } from './link/list-link/list-link.component';
import { DeleteLinkComponent } from './link/delete-link/delete-link.component';
import { ScreenshotsListComponent } from './screenshots/screenshots-list/screenshots-list.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from  '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './link/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateLinkComponent,
    ListLinkComponent,
    DeleteLinkComponent,
    ScreenshotsListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
