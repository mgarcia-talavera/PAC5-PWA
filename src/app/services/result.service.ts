import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  constructor(private http: HttpClient) {}

  getResultAll(): Observable<Image[]> {
    return this.http.get<Image[]>('https://picsum.photos/v2/list');
  }
  getResultByName(id: string): Observable<Image> {
    return this.http.get<Image>('https://picsum.photos/id/' + id + '/info');
  }
}
