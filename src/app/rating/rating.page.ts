import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: 'rating.page.html',
  styleUrls: ['rating.page.scss']
})
export class RatingPage {

  public ratings: Array<{ rateorder: number, firstname: string, famname: string}> = [];

  constructor() {

    this.ratings.push(
      { rateorder: 1, firstname: 'VALLOT', famname: 'VAINULA' },
      { rateorder: 2, firstname: 'Narco', famname: 'SMIRNOV' },
      { rateorder: 3, firstname: 'Bombasto', famname: 'LUŠIN' },
      { rateorder: 4, firstname: 'Celeritas', famname: 'STROGOV' },
      { rateorder: 5, firstname: 'Magneta', famname: 'LAANE' },
      { rateorder: 6, firstname: 'RubberMan', famname: 'LAURI' },
      { rateorder: 7, firstname: 'Dynama', famname: 'STANISLAV' },
      { rateorder: 8, firstname: 'Dr IQ', famname: 'ALEKSANDR' },
      { rateorder: 9, firstname: 'Magma', famname: 'VALLOT' },
      { rateorder: 10, firstname: 'Tornado', famname: 'ALEKSANDR' }    
    );
  }


}
