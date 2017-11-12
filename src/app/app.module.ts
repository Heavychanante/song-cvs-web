import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { SongsComponent } from './components/songs/songs.component';
import { CoverComponent } from './components/cover/cover.component';

import { SongService } from './services/song.service';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from "./services/login.service";
import { AuthGuardService } from "./services/auth-guard.service";

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'cover', component: CoverComponent },
    { path: 'songs', component: SongsComponent, canActivate: [AuthGuardService] },
    {
        path: '',
        redirectTo: '/cover',
        pathMatch: 'full'
    }
];

@NgModule( {
    declarations: [
        AppComponent,
        SongsComponent,
        CoverComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,

        MDBBootstrapModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),

    ],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [ SongService, LoginService, AuthGuardService ],
    bootstrap: [AppComponent]
} )
export class AppModule { }
