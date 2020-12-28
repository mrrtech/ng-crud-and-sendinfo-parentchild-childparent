import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  get messages(): string[] {
    return this.messageService.messages;
  }

  constructor(private messageService: MessageService, private router: Router) {}

  ngOnInit() {}

  close(): void {
    // Close the popup.
    this.router.navigate([{ outlets: { popup: null } }]);
    this.messageService.isDisplayed = false;
  }
}
