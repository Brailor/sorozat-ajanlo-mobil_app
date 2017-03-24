import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private Http : Http) { }

        searchShow(item: string){

          return this.Http.get('http://81.2.254.235:8000/search/' + item).map(res => res.json());
        }
}