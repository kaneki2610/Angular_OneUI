import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vnpt-main-drawer',
  templateUrl: './drawer.content.component.html',
  styleUrls: ['./drawer.content.component.css'],
})
export class DrawerContentComponent implements OnInit {
  @Input() title: string;

  ngOnInit() {}
}
