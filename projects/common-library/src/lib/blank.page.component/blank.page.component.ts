import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vnpt-page',
  templateUrl: './blank.page.component.html',
  styleUrls: ['./blank.page.component.css'],
})
export class BlankPageComponent implements OnInit {
  @Input() close: boolean = true;
  title = 'emptypage';
  ngOnInit() {}
  onCloseClick() {
    window.history.back();
  }
}
