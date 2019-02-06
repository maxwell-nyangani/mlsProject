import { Component, OnInit } from "@angular/core";
import { SearchResult } from "src/app/models/searchResult";
import { SongService } from "../song.service";

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
    constructor(private songService: SongService) {}

    ngOnInit() {}
    searchMusicDB(query: string) {
        this.songService.searchFor(query).subscribe(data => {
            console.log(data);
            return (this.results = data);
        });
    }
}
