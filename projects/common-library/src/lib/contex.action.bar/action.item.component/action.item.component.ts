import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'action-item',
  templateUrl: './action.item.component.html',
  styleUrls: ['./action.item.component.css'],
})
export class ActionItemComponent implements OnInit {
  @Input() text: string;
  @Input() icon: string;
  @Input() iconSrc: string;
  @Input() color: string = 'primary';
  @Input() title: string;
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  close(): void {}
}
