import { Component } from '@angular/core';
import { PhotogalleryService } from 'src/app/services/photogallery.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  photos: any[] = [];

  constructor( private photogallery: PhotogalleryService ) {
    this.photogallery.getAllPhotos()
    .subscribe( (data: any) =>{
      this.photos = data.photos.sort()
    })
   }

   deletePhoto(id:string){
     console.log("llegue con el id "+id)
     return this.photogallery.deleteOnePhoto(id)
   }

}
