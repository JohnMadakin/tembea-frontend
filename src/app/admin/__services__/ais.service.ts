import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AisService {
  public baseUrl = `https://cors-anywhere.herokuapp.com/${environment.andelaAPIUrl}/api/v1/users`;
  private token = environment.aisToken;

  constructor(private httpClient: HttpClient) { }

  getResponse(email: string): Observable<any> {
    const httpOptions = {
      headers: {
        'api-token': this.token,
      },
      params: {
        email
      }
    };
    return this.httpClient.get<any>(this.baseUrl, httpOptions).map((data) => data.values[0]);
  }
}
