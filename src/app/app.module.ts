import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// module
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/photos/photos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AddComponent } from './components/shared/add/add.component';
import { HttpClientModule } from '@angular/common/http';

// pipes
import { NophotoPipe } from './pipes/nophoto.pipe';

// routes
import { routes } from './app-routing.module';
import { SearchComponent } from './components/search/search.component';
import { OnePhotoComponent } from './components/one-photo/one-photo.component';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent,
    NophotoPipe,
    NavbarComponent,
    LoadingComponent,
    AddComponent,
    SearchComponent,
    OnePhotoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( routes, { useHash: false } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
