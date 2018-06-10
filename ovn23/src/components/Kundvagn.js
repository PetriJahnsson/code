import React from 'react';

function Kundvagn(props) {
    let i=0;
    const myList = props.buylist.map ( x => {
        return (<div className="item" key={i++}>
            <p>Artikel: {x.namn}</p>
            <p>Pris: {x.pris}kr</p>
            <div>
                <button type="button" onClick={(e) => props.removeItemClick(e, x)}>Ta bort vara</button>
            </div>
        </div>);
        });
    
    let summa = props.buylist.map( el => (el.pris)*1 ).reduce((acc, cur) => acc + cur, 0);
    console.log({summa});
    
    return (<div>
            {myList}
            <p>Att betala: {summa}kr</p>
            </div>);
}
export default Kundvagn;