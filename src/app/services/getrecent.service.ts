import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/operator/map';

@Injectable()

export class GetRecentService{

    constructor(private http: Http){}

    getRecent(){
        return this.http.get('http://81.2.254.235:8000/recent')
            .map(res => res.json());
    }

}