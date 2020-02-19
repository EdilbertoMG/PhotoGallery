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
  Photo
} from '../../interfaces/Photo';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {

  id_album: string;
  photos: Photo[];
  file: File;
  veryfidata: boolean;
  loading: boolean;

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
                      this.photos = data.photos;
                      if (this.photos.length == 0) {
                          this.veryfidata = true;
                      } else {
                          this.veryfidata = false;
                      }
                  },
                  (error) => {

                  }
              )
      });
  }

  deletePhoto(id: string, id_album: string) {
      this.photogallery.removePhotoAlbum(id, id_album)
          .subscribe(
              res => {
                  location.reload();
              },
              err => {
                  console.log(err)
              }
          )
  }

  deleteAlbum(id_album: string): boolean {
      this.photogallery.deleteAlbum(id_album)
          .subscribe(
              res => {
                  location.reload();
              },
              err => {
                  console.log(err)
              }
          )
      this.router.navigate(['photos/'])
      return false;
  }

  onPhotoSelected(files: FileList){
    this.file = files.item(0);
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement):boolean {
      this.photogallery.createPhotoInAlbum(title.value, description.value, this.file, this.id_album)
          .subscribe(
              res => {
                this.loading = false;
                alert("Saved Photo");
                location.reload();
              },
              err => {
                this.loading = false;
                  alert("Couldn't save photo");
                  console.log(err.error)
              }
          )
          return false
  }

  uploadAlbum(titleAlbum: HTMLInputElement, descriptionAlbum: HTMLTextAreaElement):boolean {
    this.loading = true;
      this.photogallery.createAlbum(titleAlbum.value, descriptionAlbum.value)
          .subscribe(
              res => {
                this.loading = false;
                alert("Saved Album");
                location.reload();
              },
              err => {
                this.loading = false;
                alert("Couldn't save Album");
                console.log(err.error)
              }
          )
          return false
  }
}