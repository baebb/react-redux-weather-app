import { CITY_WEATHER } from '../actions/index';

export default function(state = [], action) {
    // console.log('Action received ' + action.type);
    switch (action.type) {
        case CITY_WEATHER:
            return [action.payload.data];
    }
    return state;
}