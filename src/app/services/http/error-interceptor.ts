import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { RequestException } from '../../exceptions/request-exception';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertService } from '../helpers/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

  constructor(private alert: AlertService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => { //When request was completed without error
        
      }, (error: HttpErrorResponse) => { //Throw exception when has any error
        throw new RequestException(error); //By default it will be catched by global-error-handler.ts or you can catch the error manually
      })
    );
  }
}
