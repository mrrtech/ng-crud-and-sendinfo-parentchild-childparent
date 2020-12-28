import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDisplayComponent } from './components/client-display/client-display.component';
import { ClientData } from './client-data';
import { PageHeaderWrapperComponent } from './components/page-header-wrapper/page-header-wrapper.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';
import { MessageComponent } from './components/message/message.component';
import { ClientEditInfoComponent } from './components/client-edit-info/client-edit-info.component';
import { ParentComponent } from './components/test/parent/parent.component';
import { ChildComponent } from './components/test/child/child.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    ClientDisplayComponent,
    PageHeaderWrapperComponent,
    ClientEditComponent,
    MessageComponent,
    ClientEditInfoComponent,
    ParentComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ClientData, { delay: 1000 }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
