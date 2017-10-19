import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SENSORS} from '../../model/sensors.repo';
import {SensorService} from '../../services/sensor.service';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styles: [require('./floor.component.scss')]
})
export class FloorComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  title = 'Sentient Light Console';
  sensors = [];
  selectedSensor = {};

  constructor(private snackbarService: SnackbarService, private sensorService: SensorService) {
  }

  ngOnInit() {
    this.sensors = SENSORS;
    this.sensorService.selectedSensorSubject.subscribe(
      (sensor) => {
        this.sidenav.open();
        this.selectedSensor = sensor;
      }
    );
  }

  /**
   * Handles click on menu items
   * @param menuItem
   */
  onMenuItemClicked(menuItem: string) {
    switch (menuItem) {
      case 'menu': {
        this.sidenav.toggle();
        break;
      }
      case 'settings': {
        this.snackbarService.showSnackbar('Clicked on menu item Settings', '');
        break;
      }
      default: {
        break;
      }
    }
  }

  /**
   * Handles click on side menu items
   * @param menuItem
   */
  onSideMenuItemClicked(menuItem: string) {
    this.snackbarService.showSnackbar(`
        Clicked
        on
        side
        menu
        item ${menuItem}`, '');
  }
}
