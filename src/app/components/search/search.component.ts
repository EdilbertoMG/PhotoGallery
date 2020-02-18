import {
  Component
} from '@angular/core';
import {
  PhotogalleryService
} from 'src/app/services/photogallery.service';
import {
  Photo
} from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  photos: Photo[];
  loading: boolean;
  nodata: boolean;

  constructor(private photogallery: PhotogalleryService) {}

  buscar(finished: string) {
      this.loading = true;
      this.photogallery.getByName(finished)
          .subscribe((data: any) => {
                  console.log(data.photos);
                  this.photos = data.photos;
                  if (this.photos.length == 0) {
                      this.nodata = true;
                  } else {
                      this.nodata = false;
                  }
                  this.loading = false;
              },
              (error) => {
                  console.error(error);
                  this.nodata = true;
                  this.loading = false;
              }
          )
  }

  deletePhoto(id: string) {
      this.photogallery.deletePhoto(id)
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