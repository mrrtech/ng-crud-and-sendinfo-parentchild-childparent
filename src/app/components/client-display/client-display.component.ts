import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client, ClientResolved } from '../../client';
@Component({
  selector: 'app-client-display',
  templateUrl: './client-display.component.html',
  styleUrls: ['./client-display.component.scss'],
})
export class ClientDisplayComponent implements OnInit {
  pageTitle = 'Client Detail';
  client: Client;
  errorMessage: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const resolvedData: ClientResolved = this.route.snapshot.data[
      'resolvedData'
    ];
    this.errorMessage = resolvedData.error;
    this.onClientRetrieved(resolvedData.client);
  }

  onClientRetrieved(client: Client): void {
    this.client = client;

    if (this.client) {
      this.pageTitle = `Client Detail: ${this.client.clientName}`;
    } else {
      this.pageTitle = 'No client found';
    }
  }
}
