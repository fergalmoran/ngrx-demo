import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './reducers';
import { PodcastsEffects } from './effects/podcasts.effects';
import { PodcastsService } from './services/podcasts.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, HttpModule,

        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([PodcastsEffects]),
        StoreDevtoolsModule.instrument({maxAge: 25})
    ],
    providers: [
        PodcastsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
