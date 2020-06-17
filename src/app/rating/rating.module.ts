import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingPage } from './rating.page';
import { RatingService } from './rating.service';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { RatingPageRoutingModule } from './rating-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RatingPageRoutingModule
  ],
  declarations: [RatingPage],
  providers: [RatingService]
})
export class RatingPageModule {}