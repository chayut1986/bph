import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrugAllergy, Result } from '../models/drugallergy.model';

@Injectable({
  providedIn: 'root'
})
export class DrugAllergyService {



  constructor(@Inject('API_URL') private apiUrl: string, private http: HttpClient) {

  }

  getDrugAllergy(): Observable<DrugAllergy[]> {
    const _url = `${this.apiUrl}/drugallergy/drugallergies`;

    return this.http.get<DrugAllergy[]>(_url);
  }
}

