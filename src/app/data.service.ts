import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getIndicators(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/api/indicators`);
  }

  getMarkets(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/api/markets`);
  }

  getSubIndicators(indicatorId: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/api/subindicators/${indicatorId}`);
  }
}
