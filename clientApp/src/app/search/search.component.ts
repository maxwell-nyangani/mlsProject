import { Component, OnInit } from "@angular/core";
import { SearchResult } from "src/app/models/searchResult";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    results: SearchResult[] = [];
    constructor() {}

    ngOnInit() {}
}
