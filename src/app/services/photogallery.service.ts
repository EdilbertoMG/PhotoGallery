import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  Photo
} from '../interfaces/Photo';
import {
  Album
} from '../interfaces/Album';

@Injectable({
  providedIn: 'root'
})
export class PhotogalleryService {

  constructor(private http: HttpClient) {}

  URI = 'https://apiphotogallery.herokuapp.com/api/';

  getAllPhotos() {
      return this.http.get < Photo > (`${this.URI}photos`);
  }

  getOnePhotos(id: string) {
      return this.http.get < Photo[] > (`${this.URI}photos/${id}`);
  }

  getPhotosInAlbums(id: string) {
      return this.http.get < Photo[] > (`${this.URI}photosInAlbums/${id}`);
  }

  createPhoto(title: string, description: string, image: File) {
      const fd = new FormData();
      fd.append('title', title)
      fd.append('description', description)
      fd.append('image', image)
      return this.http.post(`${this.URI}photos`, fd);
  }

  createPhotoInAlbum(title: string, description: string, image: File, id_album: string) {
      const fd = new FormData();
      fd.append('title', title)
      fd.append('description', description)
      fd.append('image', image)
      fd.append('id_album', id_album)
      return this.http.post(`${this.URI}photosInAlbum`, fd);
  }

  getByName(finished: string) {
      return this.http.get < Photo > (`${this.URI}photos/search/${finished}`);
  }

  deletePhoto(id: string) {
      return this.http.delete(`${this.URI}photos/delete/${id}`);
  }

  updatePhoto(id: string, title: string, description: string) {
      return this.http.put(`${this.URI}/${id}`, {
          title,
          description
      });
  }

  addPhotoAlbum(id: string, id_album: string) {
      const fd = new FormData();
      fd.append('id', id)
      fd.append('id_album', id_album)
      return this.http.put(`${this.URI}photos`, fd);
  }

  removePhotoAlbum(id: string, id_album: string) {
      const fd = new FormData();
      fd.append('id', id)
      fd.append('id_album', id_album)
      return this.http.put(`${this.URI}photos/remove`, fd);
  }

  getAllAlbums() {
      return this.http.get < Album > (`${this.URI}albums`);
  }

  createAlbum(titleAlbum: string, descriptionAlbum: string) {
      const fdd = new FormData();
      fdd.append('title', titleAlbum)
      fdd.append('description', descriptionAlbum)
      return this.http.post(`${this.URI}albums`, fdd);
  }

  deleteAlbum(id: string) {
      return this.http.delete(`${this.URI}albums/delete/${id}`);
  }
}