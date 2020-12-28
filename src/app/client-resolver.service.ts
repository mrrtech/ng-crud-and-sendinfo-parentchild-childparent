import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { ClientResolved } from './client';
import { ClientService } from './client-service';
@Injectable({
  providedIn: 'root',
})
export class ClientResolverService implements Resolve<ClientResolved> {
  constructor(private clientService: ClientService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ClientResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(+id)) {
      const message = `Client id was not a number: ${id}`;
      console.error(message);
      return of({ client: null, error: message });
    }

    return this.clientService.getClient(+id).pipe(
      map((client) => ({ client })),
      catchError((error) => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({ client: null, error: message });
      })
    );
  }
}
