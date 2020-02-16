import { Component } from '@angular/core';
import { PhotogalleryService } from 'src/app/services/photogallery.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  photos: any[] = [];

  constructor( private photogallery: PhotogalleryService, private router: Router ) {
    this.photogallery.getAllPhotos()
    .subscribe( (data: any) =>{
      this.photos = data.photos
    })
   }

   deletePhoto(id: string) {
    this.photogallery.deletePhoto(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/photos']);
      })
  }

  addPhotoAlbum(id:HTMLInputElement,id_album:HTMLInputElement){
    this.photogallery.addPhotoAlbum(id.value, id_album.value)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['photos'])
      }, 
      err => {
        console.log(err)
      }
    )
  }

}
