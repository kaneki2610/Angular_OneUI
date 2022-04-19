import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { QuickMenuModel } from '../models/appmodel';

@Component({
  selector: 'app-quick-menu',
  templateUrl: './quick-menu.component.html',
  styleUrls: ['./quick-menu.component.css'],
})
export class QuickMenuComponent implements OnInit {
  @Input() quickmenu: QuickMenuModel[];
  activeRouter: string;
  constructor(private router: Router) {
    this.router.events.subscribe((data) => {
      if (data instanceof NavigationEnd) {
        this.activeRouter = data.url.toLowerCase();
      }
    });
  }
  
  ngOnInit(): void {}
}