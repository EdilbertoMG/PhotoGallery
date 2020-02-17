import {
    Data
} from '@angular/router';

export interface Album {
    _id ? : string,
    title: string,
    description: string,
    created_at ? : Data,
}