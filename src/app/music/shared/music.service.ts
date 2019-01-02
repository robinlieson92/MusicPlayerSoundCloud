import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  audio;

  constructor(
    private apiService: ApiService
  ) {
    this.audio = new Audio();
  }

  load(url) {
    this.audio.src = this.apiService.prepareUrl(url);
    this.audio.load();
  }

  play(url) {
    this.load(url);
    this.audio.play();
  }

  getPlaylistTracks() {
    return this.apiService.get('https://api.soundcloud.com/playlists/676822083', true)
    .pipe(
      // map((res: Response) => res.json()),
      map((data: any) => data.tracks)
    );
  }

  randomTrack(tracks) {
    const trackLength = tracks.length;
    const randomNumber = Math.floor((Math.random() * trackLength));
    console.log(Math.random(), trackLength, randomNumber);
    return tracks[randomNumber];
  }

  formatTime(seconds) {
    let minutes: any = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }

  findTracks(value) {
    return this.apiService.get(`${this.apiService.prepareUrl('https://api.soundcloud.com/tracks')}&q=${value}`, false)
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // map((res: Response) => res.json())
      map((res: any) => res)
    );
  }

  xlArtwork(url) {
    return url.replace('large', 't500x500');
  }
}
