import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Client } from './client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsUrl = 'api/clients';
  constructor(private http: HttpClient) { }

 getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getClient(id: number): Observable<Client> {
    if (id === 0) {
      return of(this.initializeClient());
    }
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url)
      .pipe(
        tap(data => console.log('getClient: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createClient(client: Client): Observable<Client> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    client.id = null;
    return this.http.post<Client>(this.clientsUrl, client, { headers })
      .pipe(
        tap(data => console.log('createClient: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteClient(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.clientsUrl}/${id}`;
    return this.http.delete<Client>(url, { headers })
      .pipe(
        tap(data => console.log('deleteClient: ' + id)),
        catchError(this.handleError)
      );
  }

  updateClient(client: Client): Observable<Client> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.clientsUrl}/${client.id}`;
    return this.http.put<Client>(url, client, { headers })
      .pipe(
        tap(() => console.log('updateClient: ' + client.id)),
        // Return the Client on an update
        map(() => client),
        catchError(this.handleError)
      );
  }

  private handleError(err: any): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

  private initializeClient(): Client {
    // Return an initialized object
    return {
      id: 0,
      clientName: null,
      clientCode: null,
      category: null,
    };
  }
}