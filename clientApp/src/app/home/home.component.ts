import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Song } from "src/app/song";
import { SongService } from "../song.service";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
    songs: any;

    getSongs(): void {
        this.songService.getSongs().subscribe(songs => {
            console.log(songs);
            return (this.songs = songs);
        });
    }
    constructor(private songService: SongService) {}
    ngOnInit() {
        this.getSongs();
    }
}
