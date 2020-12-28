import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client-service';
import { Client } from '../../client'
@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  logo = "fa fa-user";
  title = "Clients List";
  clients: Client[];
  errorMessage = '';
  constructor(private clientService: ClientService) { }

  ngOnInit(): void {


    this.clientService.getClients().subscribe({
      next: clients => {
        this.clients = clients;
        console.log(this.clients)
      },
      error: err => this.errorMessage = err
    });
  }

}
