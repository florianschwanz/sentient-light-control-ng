import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Sensor} from '../../model/sensor.model';

@Component({
  selector: 'app-floor-side-menu',
  templateUrl: './floor-side-menu.component.html',
  styleUrls: ['./floor-side-menu.component.scss']
})
export class FloorSideMenuComponent implements OnInit {
  @Input() sensor: Sensor;
  @Output() onMenuItemClicked = new EventEmitter<string>();

  menuItems = [];

  constructor() {
  }

  ngOnInit() {
  }

  clickMenuItem(menuItem: string): void {
    this.onMenuItemClicked.emit(menuItem);
  }

}
