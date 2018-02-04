import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // req.headers.append('Authorization', '<SOME-TOKEN>')
      // req.url = "http//editor.api.pm/ajax/" + req.url;
      const instaauth = this.cookieService.get('instaauth');
      // console.log('req', req);
      /*if (typeof req.body === 'object') {
        const body = JSON.stringify(req.body);
      }else {
        const body = req.body;
      }*/

      const newReq = req.clone({
          url : 'http://editor.api.pm/ajax/' + req.url,
          setParams : {
            instaauth : instaauth
          },
          // body : body
      });
      console.log('new ', req, newReq);
    return next.handle(newReq);
  }
}
