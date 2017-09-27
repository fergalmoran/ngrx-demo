import { Action } from '@ngrx/store';

export const LOAD =                 '[Podcasts] Load';
export const LOAD_SUCCESS =         '[Podcasts] Load Success';
export const LOAD_FAIL =            '[Podcasts] Load Fail';

export class LoadAction implements Action {
    readonly type = LOAD;
}

export class LoadSuccessAction implements Action {
    readonly type = LOAD_SUCCESS;

    constructor(public payload: any) { }
}

export class LoadFailAction implements Action {
    readonly type = LOAD_FAIL;

    constructor(public payload: any) { }
}

export type Actions =
    | LoadAction
        | LoadSuccessAction
            | LoadFailAction;
