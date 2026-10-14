import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
} from '@angular/core';

import { FlightStore } from '../../domains/ticketing/feature-booking/flight-search/flight-store';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar {
  private sidebarVisible = false;

  private document = inject(DOCUMENT);
  protected readonly flightStore = inject(FlightStore);

  protected sidebarToggle() {
    const body = this.document.getElementsByTagName('body')[0];

    if (this.sidebarVisible == false) {
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
}
