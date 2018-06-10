
const cols=[
    { key:'förnamn', label:'Firstname' },
    { key:'efternamn', label:'Lastname'}
];
 const heroes = [
     { firstName: 'Peter', lastName: 'Parker' },
     { firstName: 'Clark', lastName: 'Kent' },
     { firstName: 'Reed', lastName: 'Richards' },
     { firstName: 'Bruce', lastName: 'Wayne' },
     { firstName: 'Wade', lastName: 'Wilson' },
     { firstName: 'Petri', lastName: 'Jahnsson' },
     { firstName: 'Bruce', lastName: 'Banner' }
 ];
class App extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                list: heroes,
                firstName: '',
                lastName: '',
                
            };
            this.addNewHero = this.addNewHero.bind(this);
            this.rowClick = this.rowClick.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleChange2 = this.handleChange2.bind(this);
        }
   
   handleChange (event){ 
            this.setState({firstName: event.target.value});           
   }
    handleChange2 (event){ 
            this.setState({lastName: event.target.value});           
   }
    rowClick (event){
        let selectedH = event.target;      
        let someH = selectedH.id;
            someH = someH - 1;
        let oList = this.state.list;
        for ( let i = 0; i < oList.length; i++){
            if (someH == i){
                this.setState({firstName: oList[i].firstName});
                this.setState({lastName: oList[i].lastName});
            }
        }
        
    }
    
    addNewHero(event){             
        let oldList = this.state.list;
        let newHero = {firstName: this.state.firstName, lastName: this.state.lastName};
        
        if(event.target.textContent == "Add Hero"){
        
            this.setState({
                list:oldList.concat(newHero),
                firstName:"", lastName:"",
            });
        }
        
    }
 
        render() {
            return ( 
            <div>
                <MyList list={this.state.list} rowClick={this.rowClick}/>
                <AddForm addHero={this.addNewHero} firstName={this.state.firstName} lastName={this.state.lastName} handleChange={this.handleChange} handleChange2={this.handleChange2} />         
            </div>
            );
        }

    }


class MyList extends React.Component {
    render () {
        let thlist = cols;
        let k = 0;
        let key = 0;
        let newHead = thlist.map (x=>  <th key={k++}>{x.label}</th>);       
        const newBody = this.props.list.map (y=> <tr className="row" key={key++} onClick={this.props.rowClick}><td id={key}>{y.firstName}</td><td id={key}>{y.lastName}</td></tr>);
            return (
                <table id="tab">
                    <thead><tr>{newHead}</tr></thead>
                    <tbody>{newBody}</tbody>
                </table>
            );
    }
}

class AddForm extends React.Component {
    render () {
        return (
            <div>
                <form id="inputForm">
                    <input type="text" className="inputname" placeholder="Firstname" name="firstName" value={this.props.firstName} onChange={this.props.handleChange}/>
                    <input type="text" className="inputname" placeholder="Lastname" name="lastName" value={this.props.lastName} onChange={this.props.handleChange2}/>
                    <button id="addButt" type="button" onClick={this.props.addHero}>Add Hero</button>
                </form>
            </div>
        );
    }
}


    
    ReactDOM.render(
        <App></App>,
        document.getElementById('modul1')
    )
    
    