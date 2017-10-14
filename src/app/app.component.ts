import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {SnackbarService} from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [require('./app.component.scss')],
})
export class AppComponent implements OnInit {
  constructor(private snackbarService: SnackbarService,
              public snackBar: MdSnackBar) {
  }

  ngOnInit(): void {
    this.snackbarService.messageSubject.subscribe(
      (snack) => {
        this.openSnackBar(snack[0], snack[1]);
      }
    );
  }

  /**
   * Handles messages that shall be displayed in a snack bar
   * @param message
   * @param action
   */
  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
