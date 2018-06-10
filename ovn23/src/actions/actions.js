const CHANGE_TAB = 'CHANGE_TAB';
const ADD_NAMN = 'ADD_NAMN';
const ADD_PRIS = 'ADD_PRIS';
const ADD_BILD = 'ADD_BILD';
const HISTORY = 'HISTORY';
const VEGLIST = 'VEGLIST';
const BUY = 'BUY';

function actionChangeTab(selectedTab) {
    return {
        type: CHANGE_TAB,
        tab: selectedTab
    }
}

function actionAddNamn(x) {
    return {
        type: ADD_NAMN,
        namn: x
    }
}

function actionAddPris(y) {
    return {
        type: ADD_PRIS,
        pris: y
    }
}

function actionAddBild(z) {
    return {
        type: ADD_BILD,
        bild: z
    }
}

function actionHistory(action) {
    return {
        type: HISTORY,
        action
    }
}
function actionVeglist(q) {
    return {
        type: VEGLIST,
        veglist: q
    }
}
function actionBuy(w) {
    return {
        type: BUY,
        buylist: w
    }
}

export { CHANGE_TAB, actionChangeTab, ADD_NAMN, actionAddNamn, ADD_PRIS, actionAddPris, ADD_BILD, actionAddBild, HISTORY, actionHistory, VEGLIST, actionVeglist, BUY, actionBuy};