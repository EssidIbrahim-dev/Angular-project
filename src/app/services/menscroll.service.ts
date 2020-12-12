import { MenScroll } from './../model/menscroll';
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
export class MenscrollService {

  SERVER_URL = 'http://localhost/backend';
  menscrollUrl = 'http://localhost:3000/menscrolls';

  constructor(private http: HttpClient) { }

  getMenScroll(id: number): Observable<MenScroll> {
    return this.http.get<MenScroll>(`${this.menscrollUrl}/${id}`);
  }

  getMenScrolls(): Observable<MenScroll[]> {
    return this.http.get<MenScroll[]>(this.menscrollUrl);
  }

  addMenScroll(menscroll: MenScroll): Observable<MenScroll> {
    return this.http.post<MenScroll>(this.menscrollUrl, menscroll, httpOptions);
  }

  deleteMenScroll(id: number): void {
    alert('deleting' + id);
    const url = `${this.menscrollUrl}/${id}`;
    this.http.delete<MenScroll>(url, httpOptions).subscribe();
  }

  updateMenScroll(id: number, menscroll: MenScroll): Observable<any> {
    const url = `${this.menscrollUrl}/${id}`;
    return this.http.put<MenScroll>(url, menscroll, httpOptions);
  }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}/upload.php`;
    return this.http.post<any>(uploadURL, data , { responseType: 'text' as 'json' });
  }

  deleteMenScrolls(ids: number[]) {
	  if (confirm("Are you sure to delete?")) {
		const data = {'ids' : ids};
		const url = `${this.menscrollUrl}`;
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
