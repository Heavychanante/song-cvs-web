import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Song } from "../model/song";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SongService {

    private baseUrl = 'http://localhost:8080/api/';

    constructor( private http: HttpClient ) { }

    /**
     * Returns a Song by its Id
     * @param songId
     */
    public getSongById( songId: number ): Observable<Song> {
        console.log(this.baseUrl + 'songs/' + songId);
        return this.http.get( this.baseUrl + 'songs/' + songId );
    }

    /**
     * Return all songs in the database
     */
    public getSongs(): Observable<any> {
        return this.http.get( this.baseUrl + 'songs' );
    }
}
;