import { Component, OnInit } from '@angular/core';
import { PhotogalleryService } from 'src/app/services/photogallery.service';
import {Router} from '@angular/router'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  file: File;
  constructor( private servicePhoto: PhotogalleryService , private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
    }
  }

  uploadPhoto(title:HTMLInputElement,description:HTMLTextAreaElement){
    this.servicePhoto.createPhoto(title.value, description.value, this.file)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['photos'])
      }, 
      err => {
        console.log(err)
      }
    )
  }

  uploadAlbum(titleAlbum:HTMLInputElement,descriptionAlbum:HTMLTextAreaElement):boolean{
    this.servicePhoto.createAlbum(titleAlbum.value, descriptionAlbum.value)
    .subscribe(
      res => {
        console.log(res)
        /* this.router.navigate(['photos']) */
      }, 
      err => {
        console.log(err)
      }
    )
    return false
  }
}