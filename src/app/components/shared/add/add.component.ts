import {
  Component
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

export class AddComponent {
  file: File;
  loading: boolean;

  constructor(private servicePhoto: PhotogalleryService, private router: Router) {}

  onPhotoSelected(files: FileList){
    this.file = files.item(0);
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement):boolean {
    this.loading = true;
      this.servicePhoto.createPhoto(title.value, description.value, this.file)
          .subscribe(
            res => {
                alert("Saved Photo");
                location.reload();
              },
              err => {
                  alert("Couldn't save photo");
                  console.log(err.error)
              }
          )
          this.loading = false;
          return false
  }

  uploadAlbum(titleAlbum: HTMLInputElement, descriptionAlbum: HTMLTextAreaElement):boolean {
    
      this.servicePhoto.createAlbum(titleAlbum.value, descriptionAlbum.value)
          .subscribe(
              res => {
                alert("Saved Album");
                location.reload();
              },
              err => {
                alert("Couldn't save Album");
                console.log(err.error)
              }
          )
          return false
  }
}