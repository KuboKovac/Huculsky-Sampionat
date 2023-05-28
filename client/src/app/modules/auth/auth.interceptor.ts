
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
      catchError((error: HttpErrorResponse) => {
        console.log(error.status)
        if (error.status === 401) {
          localStorage.removeItem("Jwt")
          this.router.navigateByUrl('/login')
        }
        return throwError(() => error)
      }
      )
    )
  }
}