import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from '../_objects/book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BookService {

  private bookUrl = '';

  constructor(
    private http: HttpClient
  ) { }

  getBook (id: number): Observable<Book> {
    const url = `${this.bookUrl}/?send={"id"=${id}}`;
    return this.http.get<Book>(url);
  }

}
