import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { StatisticsComponent } from "./statistics/statistics.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        component: HomeComponent
    },
    { path: "search", component: SearchComponent },
    { path: "search/:term", component: SearchComponent },
    { path: "stats", component: StatisticsComponent },
    { path: "details/:id", component: DetailsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
