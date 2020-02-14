import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { NophotoPipe } from './pipes/nophoto.pipe';
import { DominsurancePipe } from './pipes/dominsurance.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
    NophotoPipe,
    DominsurancePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
