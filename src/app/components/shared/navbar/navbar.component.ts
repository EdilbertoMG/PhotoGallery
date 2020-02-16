import { Component, OnInit } from '@angular/core';
import { PhotogalleryService } from 'src/app/services/photogallery.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  albums: any[] = [];

  constructor( private photogallery: PhotogalleryService ) { 
    this.photogallery.getAllAlbums()
    .subscribe( (data: any) =>{
      this.albums = data.album
    })
  }

  ngOnInit(): void {
  }

}