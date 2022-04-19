import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SubMenuModel } from '../models/menu.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  @Input() config: SubMenuModel[];
  @Input() fixAtTop: number;
  @Input() fixAtBottom: number;
  @Input() bgColor: string;
  @Input() isCollapse: boolean = false;

  screenSize: number;
  sliceNum: number = 15;

  @Output() itemClick = new EventEmitter<SubMenuModel>();

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenSize = event.target.innerWidth;
    this.calculateScreen();
  }

  ngOnInit() {}

  calculateScreen() {
    if (this.screenSize >= 1200) this.sliceNum = 15;
    else if (this.screenSize >= 992) this.sliceNum = 9;
    else if (this.screenSize >= 768) this.sliceNum = 6;
    else if (this.screenSize >= 425) this.sliceNum = 3;
    else this.sliceNum = 2;
  }

  tonggleCollapse() {
    this.isCollapse = !this.isCollapse;
  }

  onItemClick(item: SubMenuModel) {
    this.itemClick.emit(item);
  }
}
