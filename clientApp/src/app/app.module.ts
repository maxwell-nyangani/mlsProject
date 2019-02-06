import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { SearchComponent } from "./search/search.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { PaidResultsComponent } from "./paid-results/paid-results.component";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AddHeaderInterceptor } from "./addHeaderInterceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SearchComponent,
        StatisticsComponent,
        PaidResultsComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [
        /*  {
            provide: HTTP_INTERCEPTORS,
            useClass: AddHeaderInterceptor,
            multi: true
        } */
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
