import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { LoadAction, SelectItemAction } from 'app/actions/podcasts.actions';
import { State } from 'app/reducers';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Sailor';
    podcasts$: Observable<any>;
    selected$: Observable<any>;

    constructor(private store: Store<State>){
        console.log('AppComponent', 'ctor', store);
        this.podcasts$ = this.store.select(p => p.podcasts.result);
        this.selected$ = this.store.select(p => p.podcasts.selected);
        this.store.dispatch(new LoadAction());
    }

    onSelect(p){
        console.log(p);
        this.store.dispatch(new SelectItemAction(p.id));
    }
}
