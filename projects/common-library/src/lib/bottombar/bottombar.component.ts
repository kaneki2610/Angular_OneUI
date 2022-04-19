import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bottom-bar',
  templateUrl: './bottombar.component.html',
  styleUrls: ['./bottombar.component.css'],
})
export class BottombarComponent implements OnInit {
  @Input() position: number = 0;
  @Input() bgColor: string = '#fff';

  constructor() {}

  ngOnInit(): void {}
}
