import {
  Component,
  OnInit
} from '@angular/core';
import {
  PhotogalleryService
} from 'src/app/services/photogallery.service';
import {
  Router
} from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})

export class AddComponent implements OnInit {
  file: File;
  constructor(private servicePhoto: PhotogalleryService, private router: Router) {}

  ngOnInit(): void {}

  onPhotoSelected(files: FileList){
    this.file = files.item(0);
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement) {
      this.servicePhoto.createPhoto(title.value, description.value, this.file)
          .subscribe(
              res => {
                console.log(res)
              },
              err => {
                  console.log(err)
              }
          )
  }

  uploadAlbum(titleAlbum: HTMLInputElement, descriptionAlbum: HTMLTextAreaElement) {
      this.servicePhoto.createAlbum(titleAlbum.value, descriptionAlbum.value)
          .subscribe(
              res => {
                  location.reload();
              },
              err => {
                  console.log(err)
              }
          )
  }
}