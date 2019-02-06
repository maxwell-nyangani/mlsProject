import { Injectable } from "@angular/core";
import { Song } from "./song";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class SongService {
    headers: HttpHeaders = new HttpHeaders().set(
        "Authorization",
        "Basic " + btoa("maxwell:maxwell1234")
    );
    //.set("Accept", "multipart/mixed");
    private baseUrl = "/v1/search";
    private songUrl =
        /* "https://jsonplaceholder.typicode.com/todos"; // */ "/v1/search?q=love&format=json&pageLength=100"; // URL to web api

    constructor(private http: HttpClient) {}

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error("-------------------"); // log to console instead
            console.error(error); // log to console instead
            console.error("-------------------"); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getSongs(): Observable<Song[]> {
        return this.http
            .get<Song[]>(this.songUrl, {
                headers: this.headers
            })
            .pipe(
                map(resp => resp["results"]), //extracts burried data in a response JSON object
                tap(_ => console.log("fetched heroes")),
                catchError(this.handleError("getSongs", []))
            );
    }

    searchFor(query: string): Observable<Song[]> {
        return this.http
            .get<Song[]>(this.baseUrl + "?q=" + encodeURI(query), {
                headers: this.headers //.set("Accept", "multipart/mixed")
            })
            .pipe(
                map(resp => resp["results"]), //extracts burried data in a response JSON object
                tap(_ => console.log("fetched the results of =>" + query)),
                catchError(this.handleError("getSongs", []))
            );
    }

    getSongDoc(docId: string): any {
        return this.http
            .get<any>(docId, {
                headers: new HttpHeaders()
                    .set("Content-Type", "text/xml")
                    .set(
                        "Authorization",
                        "Basic " + btoa("maxwell:maxwell1234")
                    )
                    .append(
                        "Access-Control-Allow-Methods",
                        "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                    )
                    .append("Access-Control-Allow-Origin", "*")
                    .append(
                        "Access-Control-Allow-Headers",
                        "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"
                    )
            })
            .pipe(
                //map(resp => resp["results"]), //extracts burried data in a response JSON object
                tap(_ => console.log("fetched the results of =>" + docId)),
                catchError(this.handleError("getDestails", []))
            );
    }
}
