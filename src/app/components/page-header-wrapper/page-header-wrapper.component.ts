import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header-wrapper',
  templateUrl: './page-header-wrapper.component.html',
  styleUrls: ['./page-header-wrapper.component.scss']
})
export class PageHeaderWrapperComponent implements OnInit {
  @Input() title: string;
  @Input() logo: string;
  constructor() { }

  ngOnInit(): void {
  }

}
