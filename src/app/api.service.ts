import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable({
  providedIn: AppModule,
})
export class HttpService {
  private url = 'https://mocki.io/v1/072f4309-6b86-4ecc-b055-e16192d9f76a';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }
}
