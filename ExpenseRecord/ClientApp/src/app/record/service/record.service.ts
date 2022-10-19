import { RecordModel } from './../models/Record';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private baseUrl: string;
  private http: HttpClient;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl + 'record';
  }

  getAll(): Observable<RecordModel[]> {
    return this.http.get<RecordModel[]>(this.baseUrl);
  }

  createOne(body: RecordModel): Observable<any> {
    const record = {
      description: body?.description,
      type: body?.type,
      money: body?.money,
    };
    return this.http.post<any>(this.baseUrl, record, {
      responseType: 'text' as 'json',
    });
  }

  deleteOne(id: string) {
    console.log('deleteOne: ', id);
    return this.http.delete<any>(`${this.baseUrl}/${id}`, {
      responseType: 'text' as 'json',
    });
  }
}
