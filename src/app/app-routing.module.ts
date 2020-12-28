import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientDisplayComponent } from './components/client-display/client-display.component';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientResolverService } from './client-resolver.service';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { ClientEditInfoComponent } from './components/client-edit-info/client-edit-info.component';
import { ClientEditGuard } from './client-edit.guard';
import { ParentComponent } from './components/test/parent/parent.component';
import { ChildComponent } from './components/test/child/child.component';
const routes: Routes = [
  { path: 'clientlist', component: ClientListComponent },
  {
    path: 'clientlist/:id',
    component: ClientDisplayComponent,
    resolve: { resolvedData: ClientResolverService },
  },
  {
    path: 'clientlist/:id/edit',
    component: ClientEditComponent,
    canDeactivate: [ClientEditGuard],
    resolve: { resolvedData: ClientResolverService },
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: ClientEditInfoComponent },
    ],
  },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
