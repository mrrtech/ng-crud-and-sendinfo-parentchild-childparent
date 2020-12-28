import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ClientEditComponent } from './components/client-edit/client-edit.component';

@Injectable({
  providedIn: 'root',
})
export class ClientEditGuard implements CanDeactivate<ClientEditComponent> {
  canDeactivate(
    component: ClientEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (component.isDirty) {
      const clientName = component.client.clientName || 'New Client';
      return confirm(`Navigate away and lose all changes to ${clientName}?`);
    }
    return true;
  }
}
