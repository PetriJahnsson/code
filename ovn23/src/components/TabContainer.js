import React, {Component} from 'react';
import Product from './Product';
import History from './History';
import AddForm from './AddForm';
import Kundvagn from './Kundvagn';
import {actionChangeTab, actionHistory, actionVeglist, actionBuy} from '../actions/actions.js';
import {connect} from 'react-redux';
import productList from '../index.js';
import {shoplist} from '../index.js';



class TabComponent extends Component {
    constructor(props) {
        super(props) 
        this.handleClickTab1 = this.handleClickTab1.bind(this);
        this.handleClickTab2 = this.handleClickTab2.bind(this);
        this.handleClickTab3 = this.handleClickTab3.bind(this);
        this.handleClickTab4 = this.handleClickTab4.bind(this);
        this.showResult = this.showResult.bind(this);
        this.handleBuyClick = this.handleBuyClick.bind(this);
        this.removeItemClick = this.removeItemClick.bind(this);
    }
    render(){
        let view;
        if(this.props.tab ===1){
            view = <Product veglist={this.props.veglist} namn={this.props.namn} pris={this.props.pris} bild={this.props.bild} handleBuyClick={this.handleBuyClick} />;
        } else if(this.props.tab === 2){
            view = <Kundvagn buylist={this.props.buylist} namn={this.props.namn} pris={this.props.pris} bild={this.props.bild} removeItemClick={this.removeItemClick} />;
        } else if(this.props.tab === 3){
            view = <AddForm form="selectingFormValues" onSubmit={this.showResult} />;
        } else if(this.props.tab === 4){
            view = <History history={this.props.history} />;
        }
        return(
            <div className="App">
                <div className="tabheader">
                    <button onClick={this.handleClickTab1}>Grönsaker</button>
                    <button onClick={this.handleClickTab2}>Kundvagn</button>
                    <button onClick={this.handleClickTab3}>Formulär</button>
                    <button onClick={this.handleClickTab4}>Historik</button>
                    
                </div>
                <div>
                {view}
                </div>
            </div>
            );
    }
    removeItemClick(event, product){
        for (let i = 0; i < shoplist.length; i++)
            if(shoplist[i] === product) {
                console.log(shoplist[i], product);
                shoplist.splice(i, 1);
            }
        this.changeTab(2);
    }
    handleBuyClick(event, product){
        shoplist.push(product);
    }
    handleClickTab1(event){
        this.changeTab(1);
    }
    handleClickTab2(event){
        this.changeTab(2);
    }
    handleClickTab3(event){
        this.changeTab(3);
    }
    handleClickTab4(event){
        this.changeTab(4);
    }
    changeTab(tab) {
        let action = actionChangeTab(tab);
        this.props.dispatch(action);
        this.props.dispatch(actionHistory(action));
    }
    showResult(values){
        let nString = values;
        let action = actionVeglist(nString);
        let newStuff = action.veglist;
        productList.push(newStuff);
        //this.props.dispatch(action);
        this.props.dispatch( actionHistory(action) );
    }
}
function mapStateToProps(state) {
	console.log('state:', state);
	return {
		tab: state.tab,
        veglist: state.veglist,
		namn: state.namn,
		pris: state.pris,
        bild: state.bild,
		history: state.history,
        buylist: state.buylist
	}
}


export default connect(mapStateToProps)(TabComponent);