window.onload = function () {
    let loggaUt = document.getElementById('loggaUt');
    let loggaIn = document.getElementById('loggaIn');
    let theUser = document.getElementById('theUser');
    var provider = new firebase.auth.GithubAuthProvider();
    let hits = document.getElementById('hits');
    let subb = document.getElementById('subb');
    let addName = document.getElementById('addName');
    let addRank = document.getElementById('addRank');
    let addStatus = document.getElementById('addStatus');
    let addSpecies = document.getElementById('addSpecies');
    let tableBody = document.getElementById('tableBody');
    let scrollRow = document.getElementById('scrollRow');
    let sortbutt = document.getElementsByClassName('sortbutt');
    let btnSortName = document.getElementById('btnSortName');
    let btnSortRank = document.getElementById('btnSortRank');
    let btnSortStatus = document.getElementById('btnSortStatus');
    let btnSortSpecies = document.getElementById('btnSortSpecies');
    let nHits = document.getElementsByName('nHits');
    let first = document.getElementById('first');
    let last = document.getElementById('last');
    
    loggaIn.addEventListener('click', function(event){
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a GitHub Access Token. You can use it to access the GitHub API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
        console.log('inloggad');
        console.log(user.displayName);
        theUser.innerHTML = 'Inloggad som: '+user.displayName+' <img src="'+user.photoURL+'" height="42" width="42">';
        
    
    subb.addEventListener('click', function(event) {
				firebase.database().ref('crew/').push({
					name: addName.value,
					rank: addRank.value,
					status: addStatus.value,
					species: addSpecies.value
				});          
			});
    firebase.database().ref('crew/').on('child_added', function(snapshot, prevChildKey) {
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
				tr.innerHTML = `<td>${data.name}</td> <td>${data.rank}</td> <td>${data.status}</td> <td>${data.species}</td>`;
				tableBody.appendChild(tr);
                addName.value='';
                addRank.value='';
                addStatus.value='';
                addSpecies.value='';
			}
        function sortFunc(sortbutt, sortKey) {
				sortbutt.addEventListener('click', function(event) {
					tableBody.innerHTML = '';
					firebase.database().ref('crew/').orderByChild(sortKey)
					.once('value', function(snapshot) {
						snapshot.forEach( crewRef => {
							addMessToTable(crewRef.val());
						})
					});
				})
			}
			sortFunc(btnSortName, 'name');
			sortFunc(btnSortRank, 'rank');
			sortFunc(btnSortStatus, 'status');
			sortFunc(btnSortSpecies, 'species');
			
			hits.addEventListener('keypress', function(event) {
				if( event.keyCode == 13 ) {
					let antal = Number(hits.value);
					tableBody.innerHTML = '';
					if( isNaN(antal) ) {
						hits.value = 'Input a number';
					} else  if(first.checked == true){
						firebase.database().ref('crew/').limitToFirst(antal)
						.once('value', function(snapshot) {
								snapshot.forEach( crewRef => {
									addMessToTable(crewRef.val());
								})
						});
					} else {
                        firebase.database().ref('crew/').limitToLast(antal)
						.once('value', function(snapshot) {
								snapshot.forEach( crewRef => {
									addMessToTable(crewRef.val());
								})
						});
                    }
				}
			});
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