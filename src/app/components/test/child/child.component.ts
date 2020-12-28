import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  /** This value will come from PARENT COMPONENT */
  @Input() parentName: string;

  /** The below value sent to PARENT COMPONENT */
  @Output() sendToParent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.sendToParent.emit('HelloParent');
  }
}
