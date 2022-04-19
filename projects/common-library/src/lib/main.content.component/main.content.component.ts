import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vnpt-main-content',
  templateUrl: './main.content.component.html',
  styleUrls: ['./main.content.component.css'],
})
export class MainContentComponent implements OnInit, AfterViewInit {
  @Input() title: string;

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 1000);
  }
}
