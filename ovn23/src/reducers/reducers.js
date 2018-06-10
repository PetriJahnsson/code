import { CHANGE_TAB, ADD_NAMN, ADD_PRIS, ADD_BILD, HISTORY, VEGLIST, BUY} from '../actions/actions.js';

function tabReducer(state = 1, action) {
    switch(action.type) {
        case CHANGE_TAB:
            return action.tab;
        default:
            return state;
        }
}
function namnReducer(state = '', action) {
    switch(action.type) {
        case ADD_NAMN:
            return action.namn;
        default:
            return state;
        }
}
function prisReducer(state = 0, action) {
    switch(action.type) {
        case ADD_PRIS:
            return action.pris;
        default:
            return state;
        }
}
function bildReducer(state = '', action) {
    switch(action.type) {
        case ADD_BILD:
            return action.bild;
        default:
            return state;
        }
}
function historyReducer(state = [], action) {
    switch(action.type) {
        case HISTORY:
            return [...state, action.action];
        default:
            return state;
        }
}
function buyReducer(state = [], action) {
    switch(action.type) {
        case BUY:
            return{ 
                buylist:[...state, action.action]};
        default:
            return state;
        }
}
function veglistReducer(state = [], action) {
    switch(action.type) {
        case VEGLIST:
            return
                {veglist:[ ...state, action.action]};
        default:
            return state;
        }
}

export {tabReducer, namnReducer, prisReducer, bildReducer, historyReducer, veglistReducer, buyReducer};