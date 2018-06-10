import React from 'react';

function Product(props) {
    let i=0;
    const myList = props.veglist.map ( x => {
        //console.log('Product x:', x);
        return (<div className="item" key={i++}>
            <p>Artikel: {x.namn}</p>
            <img src={x.bild} alt="Bilden" />
            <p>Pris: {x.pris}kr</p>
            <div>
                <button type="button" onClick={(e) => props.handleBuyClick(e, x)}>KÖP</button>
            </div>
        </div>); 
    });
    return (<div>
            {myList}
            </div>);
}
export default Product;