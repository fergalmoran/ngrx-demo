import { Action } from '@ngrx/store';

export const LOAD = '[Podcasts] Load';
export const LOAD_SUCCESS = '[Podcasts] Load Success';
export const LOAD_FAIL = '[Podcasts] Load Fail';
export const SELECT_ITEM = '[Podcasts] Select Item';
export const SELECT_ITEM_SUCCESS = '[Podcasts] Select Item Success';
export const SELECT_ITEM_FAILED =  '[Podcasts] Select Item Failed';

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
export class SelectItemAction implements Action {
    readonly type = SELECT_ITEM;
    constructor(public payload: number) { }
}
export class SelectItemSuccessAction implements Action {
    readonly type = SELECT_ITEM_SUCCESS;
    constructor(public payload: number) { }
}
export class SelectItemFailedAction implements Action {
    readonly type = SELECT_ITEM_FAILED;
}

export type Actions =
    | LoadAction
    | LoadSuccessAction
    | LoadFailAction
    | SelectItemAction
    | SelectItemSuccessAction
    | SelectItemFailedAction;
