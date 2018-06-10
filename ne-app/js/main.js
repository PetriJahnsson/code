window.onload = function () {
let db = firebase.database();
let bccRef = db.ref('bcc/');
let oDataList =[];

bccRef.on("child_added", function(snap, prevChildKey) {
  let theList = snap.val();
  oDataList.push(theList);
  snap.forEach(function(childSnapshot) {
    let key = childSnapshot.key;
    let childData = childSnapshot.val();
  });
  class RealObject extends React.Component {
    render() {
        let newodatalist = oDataList.map(
          item => <div key={item.objectKey} className="col-md-4 col-sm-4 col-xs-6 filtr-item" data-category={item.flat ? '1' : item.house ? '2' : item.building ? '3' : item.locale ? '3' : '9'}
            data-sort={item.flat ? 'Flat' : item.house ? 'House' : item.building ? 'Building' : item.locale ? 'Locale' : '9'}>
            <div className="agileits-img">
              <a href={item.picUrl} className="swipebox" title={item.city}>
              <img className="img-responsive " src={item.picUrl} alt="" />
              <div className="wthree-pcatn">
                <h4>Nielsen Estate</h4>
              </div>
              </a>
            </div>
            <button>
              <a href={'#' + item.objectKey} data-toggle="modal">Detaljerad Information</a>
            </button>
          </div>
        );
      return (
        <div>
        {newodatalist}
      </div>
      )
    }
  }
  class ModalObject extends React.Component {
    render() {
      //console.log(oDataList);
        let newmodallist = oDataList.map(
          items => <div  key={items.objectKey} className="modal bnr-modal fade" id={items.objectKey} tabindex="-1" role="dialog">
        		<div className="modal-dialog" role="document">
        			<div className="modal-content">
        				<div className="modal-header">
        					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        				</div>
        				<div className="modal-body modal-spa">
                  <div className="w3-content w3-display-container">
        					  <img src={items.picUrl} className="img-responsive mySlides"/>
                    <button className="w3-button w3-black w3-display-left" onClick="#">&#10094;</button>
                    <button className="w3-button w3-black w3-display-right" onClick="#">&#10095;</button>
                  </div>
        					<h4>Pris: {items.price} €</h4>
                  <h5>{items.city}</h5>
                  <p>{items.description}</p>
                  <div className="row">
                  <div className="col-md-2 col-sm-2 col-sx-2">
                  </div>
                  <div className="col-md-5 col-sm-5 col-sx-5">
        					<ul>
                    <li>Zon: {items.zone}</li>
                    <li>Storlek: {items.size} m&sup2;</li>
                    <li>Tomtstorlek: {items.propertySize} m&sup2;</li>
                    <li>Rum: {items.rooms}</li>
                    <li>Sovrum: {items.bedroom}</li>
                    <li>Badrum: {items.wc}</li>
                    <li>AC: {items.ac ? 'ja' : 'nej'}</li>
                    <li>Parkering: {items.parking ? 'ja' : 'nej'}</li>
                    <li>Pool: {items.pool ? 'ja' : 'nej'}</li>
                    <li>Terass: {items.padio ? 'ja' : 'nej'}</li>
                    <li>Hiss: {items.elevator ? 'ja' : 'nej'}</li>
                  </ul>
                </div>
                <div className="col-md-5 col-sm-5 col-sx-5">
                  <ul>
                    <li>Strand: {items.beach} meter</li>
                    <li>Marina: {items.marina} meter</li>
                    <li>Golfbana: {items.golf} meter</li>
                    <li>Tennis: {items.tennis} meter</li>
                    <li>Träningsfacilitet: {items.training} meter</li>
                    <li>Shopping: {items.shopping} meter</li>
                    <li>Transporter: {items.transportation} meter</li>
                    <li>Skolor: {items.school} meter</li>
                    <li>Apotek/Läkare: {items.medic} meter</li>
                    <li>Parker: {items.parks} meter</li>
                  </ul>
                </div>
                </div>
        				</div>
        			</div>
        		</div>
        	</div>
        );
      return (
        <div>
        {newmodallist}
      </div>
      )
    }
  }

  ReactDOM.render ( <RealObject />,
    document.getElementById('estatelist')
  );
  ReactDOM.render ( <ModalObject />,
    document.getElementById('modalDiv')
  );
});
}
