import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import { ClarityModule } from '@clr/angular';
import { BannerComponent } from './banner/banner.component';
import { IntroComponent } from './intro/intro.component';
import { PersonListComponent } from './overview/person/person-list.component';
import { GuideButtonComponent } from './guide-button/guide-button.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailsComponent } from './details/details.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { DataTableComponent } from './overview/data-table/data-table.component';
import { PersonsListComponent } from './overview/persons-list/persons-list.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { EpisodeItemComponent } from './episodes/episode-item/episode-item.component';
import { SearchPageModule } from '../search-page/search-page.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [DetailsPageComponent, BannerComponent, IntroComponent, PersonListComponent, GuideButtonComponent, BottomMenuComponent, OverviewComponent, DetailsComponent, EpisodesComponent, RecommendationsComponent, DataTableComponent, PersonsListComponent, EpisodeItemComponent],
  imports: [
    CommonModule,
    ClarityModule,
    AppRoutingModule,
    DirectivesModule,
  ],
  exports: [DetailsPageComponent]
})
export class DetailsPageModule { }
