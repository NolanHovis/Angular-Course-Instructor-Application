import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  allowNewApartment = false;
  apartmentCreationStatus = 'Apartment not created!'
  apartmentName = 'Random Apartment';
  apartmentCreated = false;
  apartments = [
    'Hilltop',
    'Icon'
  ]

  constructor() {
    setTimeout(() => {
      this.allowNewApartment = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateApartment() {
    this.apartmentCreated = true
    this.apartments.push(this.apartmentName);
    this.apartmentCreationStatus = this.apartmentName + ' was created!';
  }

  onUpdateName(event: any) {
    this.apartmentName = (<HTMLInputElement>event.target).value;
  }

}
