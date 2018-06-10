window.onload = function () {
    let loggaUt = document.getElementById('loggaUt');
    let loggaIn = document.getElementById('loggaIn');
    let theUser = document.getElementById('theUser');
    var provider = new firebase.auth.GoogleAuthProvider();
    let hits = document.getElementById('hits');
    let tableBody = document.getElementById('tableBody');
    let scrollRow = document.getElementById('scrollRow');
    let sortbutt = document.getElementsByClassName('sortbutt');
    let sortInternalID = document.getElementById('sortInternalID');
    let sortIDnr = document.getElementById('sortIDnr');
    let sortAdress = document.getElementById('sortAdress');
    let sortCity = document.getElementById('sortCity');
/* start of input variables */
  let addInternalID = document.getElementById('addInternalID');
  let addAdress = document.getElementById('addAdress');
  let addOwner = document.getElementById('addOwner');
  let addOwnerAdress = document.getElementById('addOwnerAdress');
  let addEmail = document.getElementById('addEmail');
  let addTelephone = document.getElementById('addTelephone');
  let addIDnr = document.getElementById('addIDnr');
  let addPic = document.getElementById('addPic');
  let addPic2 = document.getElementById('addPic2');
  let addPic3 = document.getElementById('addPic3');
  let addPic4 = document.getElementById('addPic4');
  let addPic5 = document.getElementById('addPic5');
  let addDescription = document.getElementById('addDescription');
  let addZip = document.getElementById('addZip');
  let addCity = document.getElementById('addCity');
  let addZone = document.getElementById('addZone');
  let addPrice = document.getElementById('addPrice');
  let addRooms = document.getElementById('addRooms');
  let addKitchen = document.getElementById('addKitchen');
  let addBedroom = document.getElementById('addBedroom');
  let addWC = document.getElementById('addWC');
  let addSize = document.getElementById('addSize');
  let addPropertySize = document.getElementById('addPropertySize');
  let submit = document.getElementById('submit');
  let addBeach = document.getElementById('addBeach');
  let addMarina = document.getElementById('addMarina');
  let addTransportation = document.getElementById('addTransportation');
  let addShopping = document.getElementById('addShopping');
  let addMedic = document.getElementById('addMedic');
  let addGolf = document.getElementById('addGolf');
  let addTennis = document.getElementById('addTennis');
  let addParks = document.getElementById('addParks');
  let addTraining = document.getElementById('addTraining');
  let addSchool = document.getElementById('addSchool');
  let addSell = document.getElementById('addSell');
  let addRent = document.getElementById('addRent');
  let addFlat = document.getElementById('addFlat');
  let addHouse = document.getElementById('addHouse');
  let addLocale = document.getElementById('addLocale');
  let addBuilding = document.getElementById('addBuilding');
  let addAc = document.getElementById('addAc');
  let addElevator = document.getElementById('addElevator');
  let addPadio = document.getElementById('addPadio');
  let addStorage = document.getElementById('addStorage');
  let addParking = document.getElementById('addParking');
  let addPool = document.getElementById('addPool');
  let cmsForm = document.getElementById('cmsForm');

    loggaIn.addEventListener('click', function(event){
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
        console.log('inloggad');
        console.log(user.displayName);
        theUser.innerHTML = 'Inloggad som: </br>'+user.displayName;


    submit.addEventListener('click', function(event) {
				let newPostRef = firebase.database().ref('bcc/').push({
          internalID: addInternalID.value,
          adress: addAdress.value,
          owner: addOwner.value,
          ownerAdress: addOwnerAdress.value,
          email: addEmail.value,
          telephone: addTelephone.value,
          idNr: addIDnr.value,
          picUrl: addPic.value,
          picUrl2: addPic2.value,
          picUrl3: addPic3.value,
          picUrl4: addPic4.value,
          picUrl5: addPic5.value,
					description: addDescription.value,
          zip: addZip.value,
          city: addCity.value,
          zone: addZone.value,
					price: addPrice.value,
          rooms: addRooms.value,
          kitchen: addKitchen.value,
          bedroom: addBedroom.value,
          wc: addWC.value,
          size: addSize.value,
          propertySize: addPropertySize.value,
          beach: addBeach.value,
          marina: addMarina.value,
          transportation: addTransportation.value,
          shopping: addShopping.value,
          medic: addMedic.value,
          golf: addGolf.value,
          tennis: addTennis.value,
          parks: addParks.value,
          training: addTraining.value,
          school: addSchool.value,
					sell: addSell.checked,
					rent: addRent.checked,
          flat: addFlat.checked,
          house: addHouse.checked,
          locale: addLocale.checked,
          building: addBuilding.checked,
          ac: addAc.checked,
          elevator: addElevator.checked,
          padio: addPadio.checked,
          storage: addStorage.checked,
          parking: addParking.checked,
          pool: addPool.checked
				});
        var dbObjectKey = newPostRef.key.toString();
        console.log('Lagt till '+ dbObjectKey);
        firebase.database().ref().child('bcc/' + dbObjectKey).update({objectKey: dbObjectKey});
        cmsForm.reset();
			});
    firebase.database().ref('bcc/').on('child_added', function(snapshot, prevChildKey) {
				let data = snapshot.val();
				addMessToTable(data);
			});

      }).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
        function addMessToTable(data) {
				let tr = document.createElement('tr');
				tr.innerHTML = `<td>${data.internalID}</td> <td>${data.idNr}</td> <td>${data.adress}</td> <td>${data.city}</td><td><button type="button" class="btn btn-info btn-sm" id="deleteButton">Ta bort</button></td>`;
        tr.cells[4].addEventListener('click', function(){
          let key = data.objectKey;
          let conF = confirm("Vill du radera detta objekt?");
          if (conF == true) {
          firebase.database().ref('bcc/' + key).remove();
          tableBody.innerHTML = '';
					firebase.database().ref('bcc/').orderByChild('internalID')
					.once('value', function(snapshot) {
						snapshot.forEach( bccRef => {
              console.log(bccRef.key);
							addMessToTable(bccRef.val());
						})
					});
        } else {

        }
        });
				tableBody.appendChild(tr);
                addInternalID.value='';
                addIDnr.value='';
                addAdress.value='';
                addCity.value='';
			}
        function sortFunc(sortbutt, sortKey) {
				sortbutt.addEventListener('click', function(event) {
					tableBody.innerHTML = '';
					firebase.database().ref('bcc/').orderByChild(sortKey)
					.once('value', function(snapshot) {
						snapshot.forEach( bccRef => {
              console.log(bccRef.key);
							addMessToTable(bccRef.val());
						})
					});
				})
			}
			sortFunc(sortInternalID, 'internalID');
			sortFunc(sortIDnr, 'idNr');
			sortFunc(sortAdress, 'adress');
			sortFunc(sortCity, 'city');
    });


        loggaUt.addEventListener('click', function(event){
        firebase.auth().signOut().then(function() {
        // Sign-out successful.
            console.log('utloggad');
            window.location.reload();
        }).catch(function(error) {
        // An error happened.
        });

    });
}
