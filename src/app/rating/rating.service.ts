import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RatingService {

  constructor(private http: HttpClient) {}

  fetchRating(): Observable<Object> {
    return this.http.get("https://ristissaar.ee/reino/ttappapi/rating.php");
  }
}