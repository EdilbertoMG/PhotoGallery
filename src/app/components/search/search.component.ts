import { Component } from '@angular/core';
import { PhotogalleryService } from 'src/app/services/photogallery.service';
import { Photo } from 'src/app/interfaces/Photo';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  photos: Photo[] = [];
  loading: boolean;

  constructor(private photogallery: PhotogalleryService) { }

  buscar( finished: string ){
    
    this.loading = true;

    this.photogallery.getByName( finished )
    .subscribe( (data: any) => {
      console.log(data.photos);
      
      this.photos = data.photos;

      this.loading = false;
    },
    (err) =>{
      this.loading = false;
    }
    );
}
}
