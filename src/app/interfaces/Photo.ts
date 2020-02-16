import { Data } from '@angular/router';

export interface Photo{
    _id?:string,
    title:string
    description:string
    imageURL?:string
    public_id?:string
    id_album?:string
    created_at?:Data
}