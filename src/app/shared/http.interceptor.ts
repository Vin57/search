import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReqInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    handler: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Pour modifier la requête interceptée, il faut utiliser un
    // clone issue de cette requête.
    const reqClone = req.clone({
      headers: req.headers.append('Authorization', 'Bear 1234'),
    });
    return handler.handle(reqClone);
  }
}
