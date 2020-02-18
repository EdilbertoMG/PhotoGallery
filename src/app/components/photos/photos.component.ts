import { Component, OnInit } from '@angular/core';
import { PhotogalleryService } from 'src/app/services/photogallery.service';
import {Router} from '@angular/router'
import { Photo } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];
  loading: boolean;
  veryfidata: boolean;

  constructor( private photogallery: PhotogalleryService, private router: Router ) {}
  
   ngOnInit() {
    this.loading = true;
    this.photogallery.getAllPhotos()
    .subscribe( (data: any) =>{
      this.photos = data.photos
      if (this.photos.length == 0) {
        this.veryfidata = true;
      }else{
        this.veryfidata = false;
      }
    })
    this.loading = false;
  }
}
