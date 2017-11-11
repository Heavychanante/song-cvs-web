import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
    //    { path: 'crisis-center', component: CrisisListComponent },
    //    { path: 'hero/:id', component: HeroDetailComponent },
    //    {
    //        path: 'heroes',
    //        component: HeroListComponent,
    //        data: { title: 'Heroes List' }
    //    },
    //    {
    //        path: '',
    //        redirectTo: '/heroes',
    //        pathMatch: 'full'
    //    },
    //    { path: '**', component: PageNotFoundComponent }
];

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        MDBBootstrapModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),

        BrowserModule
    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule { }
