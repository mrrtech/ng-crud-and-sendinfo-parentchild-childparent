import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, ClientResolved } from './../../client';
import { ClientService } from './../../client-service';
import { MessageService } from './../../message.service';
@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss'],
})
export class ClientEditComponent implements OnInit {
  pageTitle = 'Client Edit';
  errorMessage: string;

  private dataIsValid: { [key: string]: boolean } = {};

  get isDirty(): boolean {
    return (
      JSON.stringify(this.originalClient) !== JSON.stringify(this.currentClient)
    );
  }

  private currentClient: Client;
  private originalClient: Client;

  get client(): Client {
    return this.currentClient;
  }
  set client(value: Client) {
    this.currentClient = value;
    this.originalClient = value ? { ...value } : null;
  }

  constructor(
    private clientService: ClientService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      const resolvedData: ClientResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.onClientRetrieved(resolvedData.client);
    });
  }

  onClientRetrieved(client: Client): void {
    this.client = client;

    if (!this.client) {
      this.pageTitle = 'No client found';
    } else {
      if (this.client.id === 0) {
        this.pageTitle = 'Add Client';
      } else {
        this.pageTitle = `Edit Client: ${this.client.clientName}`;
      }
    }
  }

  deleteClient(): void {
    if (this.client.id === 0) {
      this.onSaveComplete(`${this.client.clientName} was deleted`);
    } else {
      if (confirm(`Really delete the client: ${this.client.clientName}?`)) {
        this.clientService.deleteClient(this.client.id).subscribe({
          next: () =>
            this.onSaveComplete(`${this.client.clientName} was deleted`),
          error: (err) => (this.errorMessage = err),
        });
      }
    }
  }

  isValid(path?: string): boolean {
    this.validate();
    if (path) {
      return this.dataIsValid[path];
    }
    return (
      this.dataIsValid &&
      Object.keys(this.dataIsValid).every((d) => this.dataIsValid[d] === true)
    );
  }

  reset(): void {
    this.dataIsValid = null;
    this.currentClient = null;
    this.originalClient = null;
  }

  saveClient(): void {
    if (this.isValid()) {
      if (this.client.id === 0) {
        this.clientService.createClient(this.client).subscribe({
          next: () =>
            this.onSaveComplete(`The new ${this.client.clientName} was saved`),
          error: (err) => (this.errorMessage = err),
        });
      } else {
        this.clientService.updateClient(this.client).subscribe({
          next: () =>
            this.onSaveComplete(
              `The updated ${this.client.clientName} was saved`
            ),
          error: (err) => (this.errorMessage = err),
        });
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      this.messageService.addMessage(message);
    }
    this.reset();
    this.router.navigate(['/clientlist']);
  }

  validate(): void {
    this.dataIsValid = {};

    if (
      this.client.clientName &&
      this.client.clientName.length >= 3 &&
      this.client.clientCode
    ) {
      this.dataIsValid['info'] = true;
    } else {
      this.dataIsValid['info'] = false;
    }
  }
}
