import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor {

  token = sessionStorage.getItem("jwt");

  constructor() { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let tokenHeader = req.clone({
      setHeaders : {
        Authorization : "bearer "+ this.token
      }
    });

    return next.handle(tokenHeader);
  }
}
