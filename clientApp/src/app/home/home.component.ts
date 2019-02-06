import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Song } from "src/app/song";
import { SongService } from "../song.service";
import {
    trigger,
    style,
    keyframes,
    transition,
    animate,
    query,
    stagger
} from "@angular/animations";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
    animations: [
        //aniamtions are added to the decorator
        trigger("songs", [
            transition("*=>*", [
                query("enter", style({ opacity: 0 }), { optional: true }),
                query(
                    "enter",
                    stagger("300ms", [
                        animate(
                            ".6s ease-in",
                            keyframes([
                                style({
                                    opacity: 0,
                                    transform: "translateX(-70%)",
                                    offset: 0
                                }),
                                style({
                                    opacity: 0.5,
                                    transform: "translateX(35px)",
                                    offset: 0.3
                                }),
                                style({
                                    opacity: 1,
                                    transform: "translateX(0)",
                                    offset: 1
                                })
                            ])
                        )
                    ]),
                    { optional: true }
                )
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {
    songs = [];

    getSongs(): void {
        this.songService.getSongs().subscribe(songs => {
            //console.log(songs);
            return (this.songs = songs);
        });
    }
    constructor(private songService: SongService) {}
    ngOnInit() {
        this.getSongs();
    }
}
