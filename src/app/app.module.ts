import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {ResponsiveModule} from 'ng2-responsive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdListModule,
  MdMenuModule,
  MdSidenavModule,
  MdSnackBarModule,
  MdToolbarModule
} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {SnackbarService} from './services/snackbar.service';
import {FloorComponent} from './components/floor/floor.component';
import {FloorToolbarComponent} from './components/floor-toolbar/floor-toolbar.component';
import {FloorSideMenuComponent} from './components/floor-side-menu/floor-side-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorComponent,
    FloorToolbarComponent,
    FloorSideMenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ResponsiveModule,
    MdButtonModule,
    MdToolbarModule,
    MdSidenavModule,
    MdSnackBarModule,
    MdCardModule,
    MdMenuModule,
    MdListModule
  ],
  providers: [SnackbarService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
