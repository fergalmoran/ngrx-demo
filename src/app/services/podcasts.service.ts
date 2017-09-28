import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PodcastsService {

    constructor(private http: Http) { }
    get() : Observable<any> {
        console.log('PodcastsService', 'get');
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

    getItem(id: any) : Observable<any> {
        console.log('PodcastsService', 'get');
        return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
    }
}
