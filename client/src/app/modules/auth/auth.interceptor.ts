
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('Jwt')

    if (token) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
      })
    }

    return next.handle(req).pipe(
      catchError(error => {
        console.log(error)
        if (error.status === 0) { //fix that later for 401 when we repair CORS 
          localStorage.removeItem("Jwt")
          this.router.navigateByUrl('/login')
        }
        return throwError(() => error)
      }
      )
    )
  }
}