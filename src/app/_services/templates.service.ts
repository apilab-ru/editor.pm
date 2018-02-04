import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Cat } from '../_objects/cat';
import { Template } from '../_objects/template';

@Injectable()
export class TemplatesService {

  private catsUrl;
  private templatesUrl;

  private cats;
  private templates;

  constructor(
    private http: HttpClient
  ) {
    this.cats      = this.http.get<Cat[]>(this.catsUrl);
    this.templates = this.http.get<Template[]>(this.templatesUrl);
  }

  getCats() : Observable<Cat[]>{
    return this.cats;
  }

  getTemplates() : Observable<Template[]>{
    return this.templates;
  } 

}
