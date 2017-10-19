import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from '../../model/sensor.model';
import {SnackbarService} from '../../services/snackbar.service';
import {DomSanitizer} from '@angular/platform-browser';
import {SensorService} from '../../services/sensor.service';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export class SensorComponent implements OnInit {
  @Input() sensor: Sensor = new Sensor();

  height = '40px';
  width = '40px';
  style;

  constructor(private sanitizer: DomSanitizer, private snackbarService: SnackbarService, private sensorService: SensorService) {
    this.style = sanitizer.bypassSecurityTrustStyle('fill:#DDD');
  }

  ngOnInit() {
    this.sensorService.selectedSensorSubject.subscribe(
      (sensor) => {
        if (sensor != null && this.sensor != null) {
          if (sensor.id === this.sensor.id) {
            this.style = this.sanitizer.bypassSecurityTrustStyle('fill:#aed581');
          } else {
            this.style = this.sanitizer.bypassSecurityTrustStyle('fill:#DDD');
          }
        }
      }
    );
  }

  /**
   * Handles click on an sensor
   */
  clickSensor() {
    this.snackbarService.showSnackbar(`Clicked on sensor ${this.sensor.id}`, '');
    this.sensorService.sensorSelected(this.sensor);
  }

}
