import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ResponsiveModule} from 'ng2-responsive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {SnackbarService} from './services/snackbar.service';
import {FloorComponent} from './components/floor/floor.component';
import {FloorToolbarComponent} from './components/floor-toolbar/floor-toolbar.component';
import {FloorSideMenuComponent} from './components/floor-side-menu/floor-side-menu.component';
import {SensorComponent} from './components/sensor/sensor.component';
import {SensorService} from './services/sensor.service';
import {SensorDetailsComponent} from './components/sensor-details/sensor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    FloorToolbarComponent,
    FloorSideMenuComponent,
    SensorComponent,
    SensorDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ResponsiveModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatCardModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [SnackbarService, SensorService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
