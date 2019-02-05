import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RouteModel} from '../../shared/models/routes.model';
import {environment} from '../../../environments/environment';
import {retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  baseUrl = `${environment.tembeaBackEndUrl}/api/v1/routes`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<{ routes: RouteModel[] }> {
    return this.http.get<{ routes: RouteModel[] }>(`${this.baseUrl}/requests`)
      .pipe(
        retry(3)
      );
  }
}
