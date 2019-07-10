import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth : LoginService, private router: Router) {

  }

  canActivate(): any {
    return this.auth.isAuthenticated().then((isAuthenticated) => {
      
      if (!isAuthenticated) {
        this.router.navigateByUrl('/login');
      }

      return isAuthenticated;
    });
  }
}
