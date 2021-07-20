import { Component } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styles: [`
    .available {
      color: white;
    }
  `]
})
export class ApartmentComponent {
  apartmentNumber = [3107, 2209, 1204, 3408];
  apartmentNumberSelector = Math.floor(Math.random() * 4)
  apartmentStatus = 'unavailable';

  constructor() {
    this.apartmentStatus = Math.random() > 0.5 ? 'available' : 'unavailable'
  }

  getApartmentStatus() {
    return this.apartmentStatus;
  }

  getColor() {
    return this.apartmentStatus === 'available' ? 'green' : 'red'
  }
}
