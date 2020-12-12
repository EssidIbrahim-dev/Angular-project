import { WomenScroll } from './../model/womenscroll';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
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
export class WomenscrollService {

  SERVER_URL = 'http://localhost/backend';
  womenscrollUrl = 'http://localhost:3000/womenscrolls';

  constructor(private http: HttpClient) { }

  getWomenScroll(id: number): Observable<WomenScroll> {
    return this.http.get<WomenScroll>(`${this.womenscrollUrl}/${id}`);
  }

  getWomenScrolls(): Observable<WomenScroll[]> {
    return this.http.get<WomenScroll[]>(this.womenscrollUrl);
  }

  addWomenScroll(womenscroll: WomenScroll): Observable<WomenScroll> {
    return this.http.post<WomenScroll>(this.womenscrollUrl, womenscroll, httpOptions);
  }

  deleteWomenScroll(id: number): void {
    alert('deleting' + id);
    const url = `${this.womenscrollUrl}/${id}`;
    this.http.delete<WomenScroll>(url, httpOptions).subscribe();
  }

  updateWomenScroll(id: number, womenscroll: WomenScroll): Observable<any> {
    const url = `${this.womenscrollUrl}/${id}`;
    return this.http.put<WomenScroll>(url, womenscroll, httpOptions);
  }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}/upload.php`;
    return this.http.post<any>(uploadURL, data , { responseType: 'text' as 'json' });
  }

  deleteWomenScrolls(ids: number[]) {
	  if (confirm("Are you sure to delete?")) {
		const data = {'ids' : ids};
		const url = `${this.womenscrollUrl}`;
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
