import { CITY_WEATHER } from '../actions/index';

export default function(state = null, action) {
    console.log('Action received ' + action.type);
    switch (action.type) {
        case CITY_WEATHER:
            return state;
    }
    return state;
}