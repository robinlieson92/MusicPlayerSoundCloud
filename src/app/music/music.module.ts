import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { ApiService } from './shared/api.service';
import { MusicService } from './shared/music.service';

@NgModule({
  imports: [
    FormsModule,
    AutoCompleteModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicFooterComponent
  ],
  declarations: [
    MusicSearchComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicFooterComponent
  ],
  providers: [
    ApiService,
    MusicService
  ]
})
export class MusicModule { }
