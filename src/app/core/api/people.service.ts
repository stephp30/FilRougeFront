import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, delay, tap } from 'rxjs/operators';
import { Case, People } from '../model';

const HOST = 'http://localhost:8080/api';

@Injectable()
export class PeopleService {

  people: People;
  selectedPeople: People;

  constructor(private http: HttpClient) { }

  getPeoples(): Observable<People[]> {
    return this.http.get<People[]>(`${HOST}/people`);
  }
  getPeople(id: number): Observable<People> {
    return this.http.get<People>(`${HOST}/people/` + id).pipe
    (tap(people => this.selectedPeople = people));  }

  createPeople(people: People): Observable<People> {
    return this.http.post<People>(`${HOST}/people`, people);
  }

  updatePeople(people: People): Observable<People> {
    return this.http.put<People>(`${HOST}/people/${people.id}`, people);
  }

  deletePeople(id: number): Observable<People> {
    return this.http.delete<People>(`${HOST}/people/${id}`);
  }

  deleteLinkPersonne(idCase: number, idPersonne): Observable<People> {
    return this.http
      .delete<any>('http://localhost:8080/api/linkPeople/' + idCase + '/' + idPersonne);
  }
}
