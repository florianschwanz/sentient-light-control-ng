import {Component, OnInit, ViewChild} from '@angular/core';
import {SnackbarService} from '../../services/snackbar.service';
import {MdSidenav} from '@angular/material';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styles: [require('./floor.component.scss')]
})
export class FloorComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  title = 'Sentient Light Console';

  constructor(private snackbarService: SnackbarService) {
  }

  ngOnInit() {
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
    this.snackbarService.showSnackbar(`Clicked on side menu item ${menuItem}`, '');
  }
}
