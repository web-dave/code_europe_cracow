import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [NewsListComponent, NewsItemComponent, NewsComponent, NewsDetailsComponent]
})
export class NewsModule { }
