import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHomeBase } from './models/homebase.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HomeBaseService {
  baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = `${environment.tembeaBackEndUrl}/api/v1/homebases`;
  }

  getByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?name=${name}`);
  }
}
