import {
  Component,
  OnInit
} from '@angular/core';
import {
  PhotogalleryService
} from 'src/app/services/photogallery.service';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Album
} from 'src/app/interfaces/Album';
import {
  Photo
} from 'src/app/interfaces/Photo';
import {
  error
} from '@angular/compiler/src/util';

@Component({
  selector: 'app-one-photo',
  templateUrl: './one-photo.component.html'
})
export class OnePhotoComponent implements OnInit {

  albums: Album[];
  photos: Photo[];
  id_photo: string;
  id_album: string;
  title: string;
  description: string;
  img: string;
  loading: boolean;
  veryfidata: boolean;
  veryfidataalbums: boolean;

  constructor(private photogallery: PhotogalleryService,
      private router: Router,
      private activatedRoute: ActivatedRoute, ) {}

  ngOnInit(): void {
      this.loading = true;
      this.activatedRoute.params.subscribe(params => {
          this.id_photo = params['id'];
          this.photogallery.getOnePhotos(this.id_photo)
              .subscribe(
                  (data: any) => {
                      this.photos = data.photos;
                      this.id_album = data.photos.id_album;
                      this.title = data.photos.title;
                      this.description = data.photos.description;
                      this.img = data.photos.imageURL;
                      this.veryfidata = false;
                  },
                  (error) => {
                      console.error(error);
                      this.veryfidata = true;
                  }
              )
          this.loading = false;
      })
      this.photogallery.getAllAlbums()
          .subscribe((data: any) => {
              this.albums = data.album
              if (this.albums.length == 0) {
                  this.veryfidataalbums = true;
              } else {
                  this.veryfidataalbums = false;
              }
          })
  }

  addPhotoToAlbum(id_photo: string, id_album: HTMLInputElement): boolean {
      console.log(this.id_photo);
      console.log(id_album.value);
      this.photogallery.addPhotoAlbum(this.id_photo, id_album.value)
          .subscribe(
              res => {
                  console.log(res);
                  this.router.navigate(['/albums/' + id_album.value])
              },
              err => {
                  console.log(err)
              }
          )
      return false;
  }

  deletePhoto(id: string) {
      this.photogallery.deletePhoto(id)
          .subscribe(
              res => {
                  console.log(res);
                  this.router.navigate(['photos/'])
              },
              err => {
                  console.log(err)
              }
          )
  }
}