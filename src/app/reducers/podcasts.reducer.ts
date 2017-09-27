import * as podcasts from '../actions/podcasts.actions';

export interface State {
    loading: boolean;
    entities: { [id: string]: any };
    result: string[];
}

export const initialState: State = {
    loading: false,
    entities: {},
    result: []
}

export function reducer(state = initialState, action: podcasts.Actions): State {
    switch (action.type) {
        case podcasts.LOAD: {
            return {
                ...state,
                result: [],
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

        default: {
            return state;
        }
    }
}
