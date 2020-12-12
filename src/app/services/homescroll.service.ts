import { HomeScroll } from './../model/homescroll';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};

@Injectable({
  providedIn: 'root'
})
export class HomescrollService {

  SERVER_URL = 'http://localhost/backend';
  homescrollUrl = 'http://localhost:3000/homescrolls';

  constructor(private http: HttpClient) { }

  getHomeScroll(id: number): Observable<HomeScroll> {
    return this.http.get<HomeScroll>(`${this.homescrollUrl}/${id}`);
  }

  getHomeScrolls(): Observable<HomeScroll[]> {
    return this.http.get<HomeScroll[]>(this.homescrollUrl);
  }

  addHomeScroll(homescroll: HomeScroll): Observable<HomeScroll> {
    return this.http.post<HomeScroll>(this.homescrollUrl, homescroll, httpOptions);
  }

  deleteHomeScroll(id: number): void {
    alert('deleting' + id);
    const url = `${this.homescrollUrl}/${id}`;
    this.http.delete<HomeScroll>(url, httpOptions).subscribe();
  }

  updateHomeScroll(id: number, homescroll: HomeScroll): Observable<any> {
    const url = `${this.homescrollUrl}/${id}`;
    return this.http.put<HomeScroll>(url, homescroll, httpOptions);
  }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}/upload.php`;
    return this.http.post<any>(uploadURL, data , { responseType: 'text' as 'json' });
  }

  deleteHomeScrolls(ids: number[]) {
	  if (confirm("Are you sure to delete?")) {
		const data = {'ids' : ids};
		const url = `${this.homescrollUrl}`;
		const options = {
			headers: new HttpHeaders({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};

		const resp = this.http.post<any>(url, data, options);

		//console.log('resp: ' + resp);

		return resp;
	  }

	  return of({});
  }
}
