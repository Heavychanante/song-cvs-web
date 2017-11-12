import { Component, OnInit } from '@angular/core';
import { SongService } from "../../services/song.service";
import { Song } from "../../model/song";

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {

  public songs: Array<Song>;

  constructor(private songService: SongService) { }

  ngOnInit() {
      this.songService.getSongs().subscribe( data => {
         this.songs = data._embedded.songs;  
      });
  }

}
