import { map } from 'rxjs/operators';
import { baseURLAuth } from './baseURL';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from './../model/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public loggedIn = new BehaviorSubject<boolean>(this.hasToken());
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }


  headers = new HttpHeaders({
    'x-access-token': localStorage.getItem('token')
  });

  login(user: User){
    return this.http.post<User>(
      baseURLAuth+"/login", {email: user.email,password: user.password}).pipe(map(user=>{
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      console.log(this.currentUserSubject);
      console.log(this.currentUserValue);
      return user;

      })
    )
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}
 register(user: User): Observable<User> {
    return this.http.post<User>(
      baseURLAuth+"/register", {name:user.name,email:user.email,password:user.password}).pipe(map(user=>{
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        console.log(this.currentUserSubject);
        console.log(this.currentUserValue);
        return user;

        }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
}
