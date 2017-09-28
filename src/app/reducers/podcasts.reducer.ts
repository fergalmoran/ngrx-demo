import * as podcasts from '../actions/podcasts.actions';

export interface State {
    loading: boolean;
    entities: { [id: string]: any };
    result: string[];
    selected: any;
}

export const initialState: State = {
    loading: false,
    entities: {},
    result: [],
    selected: null
}

export function reducer(state = initialState, action: podcasts.Actions): State {
    switch (action.type) {
        case podcasts.LOAD: {
            return {
                ...state,
                result: [],
                selected: null,
                loading: true
            }
        }

        case podcasts.LOAD_SUCCESS: {

            return {
                ...state,
                result: action.payload,
                loading: false,
            };
        }

        case podcasts.LOAD_FAIL: {

            return {
                ...state,
                loading: false,
            };
        }

        case podcasts.SELECT_ITEM:
            console.log('SELECTED ITEM');
            return state;

        default: {
            return state;
        }
    }
}
