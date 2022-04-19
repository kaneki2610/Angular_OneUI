import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'contexual-actionbar',
  templateUrl: './action.bar.component.html',
  styleUrls: ['./action.bar.component.css'],
})
export class ContexualActionBarComponent implements OnInit {
  @Input() left: TemplateRef<void>;
  @Input() right: TemplateRef<void>;
  @Input() fixAtTop: number;
  @Input() fixAtBottom: number;
  @Input() bgColor: string;
  constructor() {}

  ngOnInit(): void {}

  close(): void {}
}
