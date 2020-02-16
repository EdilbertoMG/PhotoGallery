import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Photo } from '../interfaces/Photo';
import { Album } from '../interfaces/Album';

@Injectable({
  providedIn: 'root'
})
export class PhotogalleryService {

  constructor(private http: HttpClient ) {}
 
  URI = 'https://apiphotogallery.herokuapp.com/api/';

  getAllPhotos(){
    return this.http.get<Photo>(this.URI+'photos');
  }

  createPhoto(title:string, description:string, image:File){
    const fd = new FormData();
    fd.append('title',title)
    fd.append('description',description)
    fd.append('image',image)
    return this.http.post(this.URI+'photos', fd);
  }

  deleteOnePhoto(id:string){

    let httpParams = new HttpParams();
    httpParams.set('id', id);

    let options = { params: httpParams };
    return this.http.delete(this.URI+'photos/delete/'+ options);
  }
}
