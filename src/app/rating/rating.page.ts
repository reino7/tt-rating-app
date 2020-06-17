import { Component } from '@angular/core';
import { RatingService } from './rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: 'rating.page.html',
  styleUrls: ['rating.page.scss']
})
export class RatingPage {
  
  ratings$;

  constructor(private ratingService: RatingService) {
    this.fetchRating();
  }
  
  fetchRating() {
    this.ratings$ = this.ratingService.fetchRating();
  }

}
