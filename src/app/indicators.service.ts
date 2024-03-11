import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor(private httpClient: HttpClient) { }

  public getIndicatorsFromDatabase(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:3000/api/indicators');
  }
}
