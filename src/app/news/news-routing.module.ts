import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPage } from './news.page';
import { NewsDetailPage } from '../news-detail/news-detail.component';

const routes: Routes = [
  {
    path: '',
    component: NewsPage,
  },
  {
    path: 'news-detail',
    component: NewsDetailPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsPageRoutingModule {}
