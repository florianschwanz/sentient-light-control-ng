import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Sensor} from '../model/sensor.model';

@Injectable()
export class SensorService {
  selectedSensorSubject = new Subject<Sensor>();

  constructor() {
  }

  sensorSelected(sensor: Sensor) {
    this.selectedSensorSubject.next(sensor);
  }

}
