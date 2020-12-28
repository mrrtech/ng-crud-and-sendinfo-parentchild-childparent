import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Client } from './../../client';

@Component({
  selector: 'app-client-edit-info',
  templateUrl: './client-edit-info.component.html',
  styleUrls: ['./client-edit-info.component.scss'],
})
export class ClientEditInfoComponent implements OnInit {
  @ViewChild(NgForm) clientForm: NgForm;

  errorMessage: string;
  client: Client;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent.data.subscribe((data) => {
      if (this.clientForm) {
        this.clientForm.reset();
      }

      this.client = data['resolvedData'].client;
    });
  }
}
