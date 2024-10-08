import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {
  protected baseUrl: string;
  protected endpoint: string;

  constructor(endpoint: string) {
    this.baseUrl = environment.url;
    this.endpoint = endpoint;
  }

  protected get url(): string {
    return `${this.baseUrl}${this.endpoint}`;
  }

  getAll(): Observable<T[]> {
    return from(axios.get<T[]>(this.url)).pipe(
      map((response: AxiosResponse<T[]>) => response.data)
    );
  }
  getById(id: string): Observable<T> {
    return from(axios.get<T>(`${this.url}/${id}`)).pipe(
      map((response: AxiosResponse<T>) => response.data)
    );
  }
  create(data: T): Observable<T> {
    return from(axios.post<T>(this.url, data)).pipe(
      map((response: AxiosResponse<T>) => response.data)
    );
  }
  update(id: string, data: T): Observable<T> {
    return from(axios.put<T>(`${this.url}/${id}`, data)).pipe(
      map((response: AxiosResponse<T>) => response.data)
    );
  }

  // Eliminar un elemento por ID
  delete(id: string): Observable<any> {
    return from(axios.delete(`${this.url}/${id}`)).pipe(
      map((response: AxiosResponse<any>) => response.data)
    );
  }
}
