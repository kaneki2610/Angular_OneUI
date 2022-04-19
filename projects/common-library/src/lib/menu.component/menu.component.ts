import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SubMenuModel } from '../models/menu.model';
import { Utilities } from '../utilities';

@Component({
  selector: 'submenu-comp',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class SubMenuComponent implements OnInit {
  @Input() menuConfig: SubMenuModel[];

  @Output() itemClick = new EventEmitter<SubMenuModel>();

  activeRouter: string;

  constructor(private router: Router) {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.activeRouter = data.url.toLowerCase();
      }
    });
  }

  ngOnInit() {}

  onClick(event: SubMenuModel) {
    this.itemClick.emit(event);
  }
}
