import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  httpHeaders: HttpHeaders = new HttpHeaders({ authorization : 'Basic ' + btoa('admin:password') });

  constructor(private httpClient: HttpClient) { }

  public createPerson(personData: Person): Observable<any> {
    return this.httpClient.post(environment.API.PERSON.CREATE, personData, { headers : this.httpHeaders });
  }

  public updatePerson(personData: Person): Observable<any> {
    return this.httpClient.put(environment.API.PERSON.UPDATE, personData, { headers : this.httpHeaders });
  }

  public getPerson(personId: number): Observable<any> {
    return this.httpClient.get(environment.API.PERSON.GET_BY_ID + personId, { headers : this.httpHeaders });
  }

  public getAllPersons(): Observable<any> {
    return this.httpClient.get(environment.API.PERSON.GET_ALL, { headers : this.httpHeaders });
  }

  public removePerson(personId: number): Observable<any> {
    return this.httpClient.delete(environment.API.PERSON.DELETE + personId, { headers : this.httpHeaders });
  }
}
