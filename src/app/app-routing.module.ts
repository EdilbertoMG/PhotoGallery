import { Routes } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './components/albums/albums.component';
/* import { SearchComponent } from './components/search/search.component'; */

export const routes: Routes = [
    { path: 'photos', component: PhotosComponent },
   /*  { path: 'search', component: SearchComponent }, */
    { path: 'albums/:id', component: AlbumsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'photos' },
    { path: '**', pathMatch: 'full', redirectTo: 'photos' }
];