import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  selectedCity!: City;
  constructor(private http: HttpClient) {}

  getCitiesData(): Observable<City[]> {
    return this.http.get<City[]>('/cities');
  }
  getSelectedCitiesData(): Observable<City[]> {
    return this.http.get<City[]>('/selectedCities');
  }
  postSelectedCityData(data: City): Observable<any> {
    return this.http.post<City[]>('/selectedCities', data);
  }
  deleteSelectedCityData(id: number): Observable<any> {
    return this.http.delete<City[]>('/selectedCities/' + id);
  }
}
