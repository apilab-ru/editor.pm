import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // req.headers.append('Authorization', '<SOME-TOKEN>')
      // req.url = "http//editor.api.pm/ajax/" + req.url;
      const instaauth = this.cookieService.get('instaauth');

      const newReq = req.clone({
          url : environment.api + req.url,
          setParams : {
            instaauth : instaauth
          },
      });
      // console.log('new ', req, newReq);
    return next.handle(newReq);
  }
}
