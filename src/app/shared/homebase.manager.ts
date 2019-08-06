import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface IHomeBase {
  id: number;
  name: string;
}

@Injectable()
export class HomeBaseService {
  baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = '';  // url fgt homebase endpoint
  }

  getByName(name: string) {
    return this.http.get<IHomeBase>(this.baseUrl);
  }
}

@Injectable()
export class HomeBaseManager {
  store: Storage;

  constructor(private readonly homebaseService: HomeBaseService) {
    this.store = localStorage;
  }

  setHomebase(homebase: string) {
    this.homebaseService.getByName(homebase)
      .subscribe(h => {
        this.store.setItem('HOMEBASE_ID', h.id.toString());
        this.store.setItem('HOMEBASE_NAME', h.name);
      });
  }

  getHomebaseId() {
    const id = this.store.getItem('HOMEBASE_ID');
    if (!id) {
      throw new Error('User did not specify any homebase');
    }
    return Number(id);
  }
}
