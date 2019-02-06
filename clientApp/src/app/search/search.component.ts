import { Component, OnInit } from "@angular/core";
import { SearchResult } from "src/app/models/searchResult";
import { SongService } from "../song.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    results = [];
    matchingTextReducer = (accumulator, currentValue) => {
        let matchingPhrase = accumulator;
        currentValue["match-text"].forEach(element => {
            matchingPhrase += element;
        });

        return matchingPhrase + "\n";
    };

    searchQuery;
    constructor(
        private songService: SongService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(res => {
            console.log(res.term);
            this.searchQuery = res.term;
        });
    }

    ngOnInit() {
        if (this.searchQuery) {
            this.searchMusicDB(this.searchQuery);
        }
    }
    searchMusicDB(query: string) {
        this.songService.searchFor(query).subscribe(data => {
            console.log(data);
            return (this.results = data);
        });
    }

    viewSongDetails(docHref: string) {
        this.router.navigate(["details/" + encodeURIComponent(docHref)]);
    }
}
