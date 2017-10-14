import {Component, EventEmitter, Input, isDevMode, Output} from '@angular/core';

@Component({
  selector: 'app-floor-toolbar',
  templateUrl: './floor-toolbar.component.html',
  styles: [require('./floor-toolbar.component.scss')]
})
export class FloorToolbarComponent {
  @Input() title = '';
  @Output() onSearchItemChanged = new EventEmitter<string>();
  @Output() onMenuItemClicked = new EventEmitter<string>();

  public state = 'active';

  devMode: boolean;

  constructor() {
    this.devMode = isDevMode();
  }

  public changeState(active: boolean, screenWidth: number) {
    this.state = active ? 'active' : (screenWidth > 1200) ? 'inactive' : 'inactive-small';
  }

  clickMenuItem(menuItem: string): void {
    this.onMenuItemClicked.emit(menuItem);
  }
}
