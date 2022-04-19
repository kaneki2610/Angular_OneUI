import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar-item',
  templateUrl: './toolbar.item.component.html',
  styleUrls: ['./toolbar.item.component.css'],
})
export class ToolbarItemComponent implements OnInit {
  @Input() type: string = 'md';
  @Input() title: string;
  @Input() icon: string;
  @Input() iconfont: boolean;

  ngOnInit() {}
}
