import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Skill } from '../types/skill.type';
import { Work } from '../types/work.type';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders = new HttpHeaders();

  constructor(
    private http: HttpClient
  ) { }

  private get<T>(path: string, params: Params = {}): Observable<T> {
    return this.http.get<T>(`${environment.URL}${path}`, {
      headers: this.headers,
      params,
    });
  }

  public getSkills(): Observable<Skill[]> {
    return this.get<Skill[]>('skills');
  }

  public getWorks(): Observable<Work[]> {
    return this.get<Work[]>('works');
  }
}
