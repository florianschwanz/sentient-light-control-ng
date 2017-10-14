import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-floor-side-menu',
  templateUrl: './floor-side-menu.component.html',
  styleUrls: ['./floor-side-menu.component.scss']
})
export class FloorSideMenuComponent implements OnInit {
  @Output() onMenuItemClicked = new EventEmitter<string>();

  menuItems = [];

  constructor() {
  }

  ngOnInit() {
    this.menuItems.push('Hello');
    this.menuItems.push('World');
  }

  clickMenuItem(menuItem: string): void {
    this.onMenuItemClicked.emit(menuItem);
  }

}
