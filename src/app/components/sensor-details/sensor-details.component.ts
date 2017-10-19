import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from '../../model/sensor.model';

@Component({
  selector: 'app-sensor-details',
  templateUrl: './sensor-details.component.html',
  styleUrls: ['./sensor-details.component.scss']
})
export class SensorDetailsComponent implements OnInit {
  @Input() sensor: Sensor;

  constructor() {
  }

  ngOnInit() {
  }

}
