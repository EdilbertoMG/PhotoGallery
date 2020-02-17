import { Component, OnInit } from '@angular/core';
import { PhotogalleryService } from 'src/app/services/photogallery.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  id_album: string;
  photos: Photo[];

  constructor(
    private photogallery: PhotogalleryService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id_album = params['id'];
      this.photogallery.getPhotosInAlbums(this.id_album)
        .subscribe(
          (data: any) => {
            console.log(data.photos);
            this.photos = data.photos;
          }
        )
    });
  }

  deletePhoto(id:string, id_album:string) {
    this.photogallery.removePhotoAlbum(id,id_album)
      .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['photos'])
      },
      err => {
        console.log(err)
      }
      )
  }

  deleteAlbum(id_album:string){
    this.photogallery.deleteAlbum(id_album)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['photos'])
      },
      err => {
        console.log(err)
      }
      )
  }
}
