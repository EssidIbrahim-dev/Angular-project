import { Observable, of } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

export class ProductService {

  SERVER_URL = 'http://localhost/backend';
  productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.productUrl}/${id}`);
  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getMenProducts(): Observable<Product[]> {
    const url = `${this.productUrl+'?gender=men'}`;
    return this.http.get<Product[]>(url);
  }

  getWomenProducts(): Observable<Product[]> {
    const url = `${this.productUrl+'?gender=women'}`;
    return this.http.get<Product[]>(url);
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product, httpOptions);
  }

  deleteProduct(id: number): void {
    alert('deleting' + id);
    const url = `${this.productUrl}/${id}`;
    this.http.delete<Product>(url, httpOptions).subscribe();
  }

  updateProduct(id: number, product: Product): Observable<any> {
    const url = `${this.productUrl}/${id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

   like(id: number, product: Product): Observable<any> {
    const url = `${this.productUrl}/${id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

  public uploadFile(data) {
    let uploadURL = `${this.SERVER_URL}/upload.php`;
    return this.http.post<any>(uploadURL, data , { responseType: 'text' as 'json' });
  }

  deleteProducts(ids: number[]) {
	  if (confirm("Are you sure to delete ?")) {
		const data = {'ids' : ids};
		const url = `${this.productUrl}`;
		const options = {
			headers: new HttpHeaders({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			responseType: 'text' as 'json'
		};
		const resp = this.http.post<any>(url, data, options);
		return resp;
	  }
	  return of({});
  }
}
