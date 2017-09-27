import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { PodcastsService } from '../services/podcasts.service';
import * as podcasts from '../actions/podcasts.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class PodcastsEffects {
    constructor(
        private podcastsService: PodcastsService,
        private actions$: Actions
    ) { }

    @Effect() get$ = this.actions$
    .ofType(podcasts.LOAD)
    .switchMap(payload => this.podcastsService.get()
               // If successful, dispatch success action with result
               .map(res => ({ type: podcasts.LOAD_SUCCESS, payload: res.json() }))
               // If request fails, dispatch failed action
               .catch(() => Observable.of({ type: podcasts.LOAD_FAIL}))
              );
}
