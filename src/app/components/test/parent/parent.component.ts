import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  name = 'Hello Child';
  childData: string;
  constructor() {}

  ngOnInit(): void {}

  getChildValue(fromParent) {
    this.childData = fromParent;
  }
}
