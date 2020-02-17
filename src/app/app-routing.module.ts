import { Routes } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { OnePhotoComponent } from './components/one-photo/one-photo.component';

export const routes: Routes = [
    { path: 'photos', component: PhotosComponent },
    { path: 'photos/:id', component: OnePhotoComponent },
    { path: 'albums/:id', component: AlbumsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'photos' },
    { path: '**', pathMatch: 'full', redirectTo: 'photos' }
];