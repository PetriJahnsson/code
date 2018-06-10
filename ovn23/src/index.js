import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {tabReducer, namnReducer, prisReducer, bildReducer, historyReducer, veglistReducer, buyReducer} from './reducers/reducers.js';//TODO add reducers
import { modelReducer } from 'react-redux-form';
import { reducer as formReducer } from 'redux-form';

let productList = [{namn:'Selleri', pris:12, bild:'https://static.mathem.se/shared/images/products/medium/blekselleri-eko-350g-klass1.jpg'},{namn:'Tomato', pris:10, bild:'http://vectorboom.com/TUTORIALS/Tomato/0.jpg'},{namn:'Leek', pris:8, bild:'http://www.goodwholefood.com/wp-content/uploads/2016/10/Leek.jpg'}];

let shoplist = [];

let initialState = {
    tab: 1, //1=produkter, 2=kundvagn, 3=lägg till produkt formulär, 4=historik
    veglist: productList,
    namn: 'Selleri',
    pris: 12,
    bild: 'https://static.mathem.se/shared/images/products/medium/blekselleri-eko-350g-klass1.jpg',
    buylist: shoplist,
    history: [{type: 'TEST'}]
}

let rootReducer = combineReducers({
    tab: tabReducer,
    veglist: veglistReducer,
    namn: (namnReducer, modelReducer),
    pris: (prisReducer, modelReducer),
    bild: (bildReducer, modelReducer),
    history: historyReducer,
    form: formReducer,
    buylist: buyReducer
});
export default productList;
export {shoplist};

const store = createStore(rootReducer, initialState);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
