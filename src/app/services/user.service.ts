import { User } from './../model/user';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
    userUrl = 'http://localhost:3000/users';

    constructor(private http: HttpClient) { }


    getUser(id: number): Observable<User> {
      return this.http.get<User>(`${this.userUrl}/${id}`);
    }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.userUrl);
    }

    addUser(user: User): Observable<User> {
      return this.http.post<User>(this.userUrl, user, httpOptions);
    }

    deleteUser(id: number): void {
        alert('deleting' + id);
      const url = `${this.userUrl}/${id}`;
      this.http.delete<User>(url, httpOptions).subscribe();
    }

    updateUser(id: number, user: User): Observable<any> {
      const url = `${this.userUrl}/${id}`;
      return this.http.put<User>(url, user, httpOptions);
    }

    login(email :string,password:string):Observable<any>{
      const url = `${this.userUrl}`+"?email="+`${email}`+"&password="+`${password}`;
      return this.http.get<User>(url);
    }

  }
