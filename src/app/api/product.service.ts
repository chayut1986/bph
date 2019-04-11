import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) {

  }

  getProduct(): Observable<Product[]> {
    const _url = `${this.apiUrl}/api/get_courses.php`;

    return this.http.get<Product[]>(_url);
  }
}
