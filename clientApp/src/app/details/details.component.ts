import { Component, OnInit } from "@angular/core";
import { SongService } from "../song.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-details",
    templateUrl: "./details.component.html",
    styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
    docId;
    details = "Loading...";
    constructor(
        private songService: SongService,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(res => {
            console.log(decodeURIComponent(res.id));
            this.docId = decodeURIComponent(res.id);
        });
    }

    ngOnInit() {
        this.songService.getSongDoc(this.docId).subscribe(data => {
            this.details = data;
        });
    }
}
