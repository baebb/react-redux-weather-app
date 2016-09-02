import { FETCH_WEATHER, CITY_WEATHER } from '../actions/index';

const INIT_STATE = { all: [], city: null };

export default function(state = INIT_STATE, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return { ...state, all: [action.payload.data, ...state.all] };
        case CITY_WEATHER:
            return { ...state, city: action.payload.data };
        default:
            return state;
    }
    return state;
}