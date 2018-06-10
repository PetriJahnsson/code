
(function(){
	var canvas=document.getElementById("can");
	var context=canvas.getContext("2d");
	let button=document.getElementById("rita");
	button.onclick=rita;
	let button2=document.getElementById("rensa");
	button2.onclick=rensa;
	var statusB=document.getElementById('statusB');
	var jstr=document.getElementById('jotext');
	var lista=[];
	
	let menubutton=document.getElementById('menubutton');
	menubutton.addEventListener('click', show);
function show(){
	let showhide=document.getElementById('navi');
	showhide.classList.toggle('navShow');
}
	
	let expbutton=document.getElementById('exp');
	expbutton.addEventListener('click', expB);
function expB(event){
	expImg();
}

	let impbutton=document.getElementById('imp');
	impbutton.addEventListener('click', impB);
function impB(event){
	impImg();
}

	let mencirk=document.getElementById('mencirk');
	mencirk.addEventListener('click', menCir);
function menCir(event){
	drawCir(canvas, context);
}

	let menrekt=document.getElementById('menrekt');
	menrekt.addEventListener('click', menRek);
function menRek(event){
	drawRec(canvas, context);
}

	let mentria=document.getElementById('mentria');
	mentria.addEventListener('click', menTri);
function menTri(event){
	drawTri(canvas, context);
}

	let menpoly=document.getElementById('menpoly');
	menpoly.addEventListener('click', menPol);
function menPol(event){
	drawPolygon(canvas, context);
}

	let menrens=document.getElementById('menrens');
	menrens.addEventListener('click', menRen);
function menRen(event){
	rensa();
}

	let menexpo=document.getElementById('menexpo');
	menexpo.addEventListener('click', menExp);
function menExp(event){
	expImg();
}

let adcol=document.getElementById('adcol');
	adcol.addEventListener('click', adCol);
function adCol(event){
	let hcol=document.getElementById('farg').value;
	let myopt=document.createElement('option');
	myopt.text=hcol;
	myopt.value=hcol;
	let mysel=document.getElementById('sel');
	mysel.appendChild(myopt);
}



function rita(){
if (document.getElementById('ranrectangle').checked){
	for (let rectangle=0; rectangle<20; rectangle++){
		drawRectangle(canvas, context);
	}statusB.innerHTML='Ritar random rektanglar ';
} else if (document.getElementById('rancircle').checked){
	for (let circle=0; circle<20; circle++){
		drawCircle(canvas, context);
	}statusB.innerHTML='Ritar random cirklar ';
} else if (document.getElementById('rantriangle').checked){
	for (let triangle=0; triangle<2; triangle++){
		drawTriangle(canvas, context);
	}statusB.innerHTML='Ritar random trianglar ';
}else if (document.getElementById('polygon').checked){
	drawPolygon(canvas,context);
}else if (document.getElementById('rectangle').checked){
	drawRec(canvas, context);
}else if (document.getElementById('circle').checked){
	drawCir(canvas, context);
}else if (document.getElementById('triangle').checked){
	drawTri(canvas, context);
}	
}

function drawRectangle(canvas, context){
	
	let selectObj=document.getElementById('sel');
	let index=selectObj.selectedIndex;
	let color=selectObj[index].value;
	if (color=='black'){
		document.getElementById('farg').value='#000000';
	}else if (color=='blue') {
		document.getElementById('farg').value='#0000FF';
	}else if (color=='green'){
		document.getElementById('farg').value='#008000';
	}else if(color=='inget') {
		let hcolo=document.getElementById('farg').value;
		document.getElementById('farg').value=hcolo;
	}else {
		document.getElementById('farg').value=color;
	}
	let hcol=document.getElementById('farg').value;
	let w=Math.floor(Math.random()*40);
	let x=Math.floor(Math.random()*canvas.width);
	let y=Math.floor(Math.random()*canvas.height);
	context.fillStyle=hcol;
	context.fillRect(x, y, w, w);
}
function drawRec(canvas, context){
	
	statusB.innerHTML='Ritar rektangel Markera två punkter ';
	let selectObj=document.getElementById('sel');
	let index=selectObj.selectedIndex;
	let color=selectObj[index].value;
	if (color=='black'){
		document.getElementById('farg').value='#000000';
	}else if (color=='blue') {
		document.getElementById('farg').value='#0000FF';
	}else if (color=='green'){
		document.getElementById('farg').value='#008000';
	}else if(color=='inget') {
		let hcolo=document.getElementById('farg').value;
		document.getElementById('farg').value=hcolo;
	}else {
		document.getElementById('farg').value=color;
	}
	let hcol=document.getElementById('farg').value;
	let c=0;
	let mx=0;
	let my=0;
	context.beginPath();
	canvas.addEventListener('click', recFunc);
	function recFunc(event){
	c=c+1;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;	
	if (c==1){
		mx=x;
		my=y;
		
	}else {
		x=x-mx;
		y=y-my;
		context.fillStyle=hcol;
		context.fillRect(mx,my,x,y);
		c=0;
		lista.push({"id":"rectangle","mx":mx,"my":my,"x":x,"y":y,"hcol":hcol});
		canvas.removeEventListener('click', recFunc);
	}
	}	
}
function drawCircle(canvas, context){
	
	let selectObj=document.getElementById('sel');
	let index=selectObj.selectedIndex;
	let color=selectObj[index].value;
	if (color=='black'){
		document.getElementById('farg').value='#000000';
	}else if (color=='blue') {
		document.getElementById('farg').value='#0000FF';
	}else if (color=='green'){
		document.getElementById('farg').value='#008000';
	}else if(color=='inget') {
		let hcolo=document.getElementById('farg').value;
		document.getElementById('farg').value=hcolo;
	}else {
		document.getElementById('farg').value=color;
	}
	let hcol=document.getElementById('farg').value;
	let radius=Math.floor(Math.random()*40);
	let x=Math.floor(Math.random()*canvas.width);
	let y=Math.floor(Math.random()*canvas.height);
	context.beginPath();
	context.arc(x, y, radius, 0, 2*Math.PI, true);
	context.fillStyle=hcol;
	context.fill();
}
function drawCir(canvas, context){
	
	statusB.innerHTML='Ritar cirkel Markera två punkter ';
	let selectObj=document.getElementById('sel');
	let index=selectObj.selectedIndex;
	let color=selectObj[index].value;
	if (color=='black'){
		document.getElementById('farg').value='#000000';
	}else if (color=='blue') {
		document.getElementById('farg').value='#0000FF';
	}else if (color=='green'){
		document.getElementById('farg').value='#008000';
	}else if(color=='inget') {
		let hcolo=document.getElementById('farg').value;
		document.getElementById('farg').value=hcolo;
	}else {
		document.getElementById('farg').value=color;
	}
	let hcol=document.getElementById('farg').value;
	let c=0;
	let mx=0;
	let my=0;
	let r=0;
	context.beginPath();
	canvas.addEventListener('click', cirFunc);
	function cirFunc(event){
	c=c+1;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;	
	if (c==1){
		mx=x;
		my=y;
		
	}else {
		r=x-mx;
		if (r<0){
			r=-1*r;
		}
		context.arc(x, y, r, 0, 2*Math.PI, true);
		context.fillStyle=hcol;
		context.fill();		
		c=0;
		lista.push({"id":"circle","x":x,"y":y,"r":r,"hcol":hcol});
		canvas.removeEventListener('click',cirFunc);
	}
	}
}
function drawTriangle(canvas, context){
	
	let selectObj=document.getElementById('sel');
	let index=selectObj.selectedIndex;
	let color=selectObj[index].value;
	if (color=='black'){
		document.getElementById('farg').value='#000000';
	}else if (color=='blue') {
		document.getElementById('farg').value='#0000FF';
	}else if (color=='green'){
		document.getElementById('farg').value='#008000';
	}else if(color=='inget') {
		let hcolo=document.getElementById('farg').value;
		document.getElementById('farg').value=hcolo;
	}else {
		document.getElementById('farg').value=color;
	}
	let hcol=document.getElementById('farg').value;
	let w=Math.floor(Math.random()*canvas.width);
	let w2=Math.floor(Math.random()*canvas.height);
	let w3=Math.floor(Math.random()*canvas.width);
	let w4=Math.floor(Math.random()*canvas.height);
	let x=Math.floor(Math.random()*canvas.width);
	let y=Math.floor(Math.random()*canvas.height);
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(w, w2);
	context.lineTo(w3, w4);
	context.closePath();
	context.fillStyle=hcol;
	context.fill();
}
function drawTri(canvas, context){
	let myobj={};
	myobj["id"]="triangle";
	statusB.innerHTML='Ritar triangel Markera tre punkter ';
	let selectObj=document.getElementById('sel');
	let index=selectObj.selectedIndex;
	let color=selectObj[index].value;
	if (color=='black'){
		document.getElementById('farg').value='#000000';
	}else if (color=='blue') {
		document.getElementById('farg').value='#0000FF';
	}else if (color=='green'){
		document.getElementById('farg').value='#008000';
	}else if(color=='inget') {
		let hcolo=document.getElementById('farg').value;
		document.getElementById('farg').value=hcolo;
	}else {
		document.getElementById('farg').value=color;
	}
	let hcol=document.getElementById('farg').value;
	let c=0;
	context.beginPath();
	canvas.addEventListener('click', triFunc);
	function triFunc(event){
	
	c=c+1;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;	
	if (c==1){
		statusB.innerHTML='Fler punkter krävs för en triangel';
		
		context.moveTo(x,y);
		var mx=x;
		var my=y;
		myobj["x1"]=mx;
		myobj["y1"]=my;
	}else if (c==2) {
		
		context.lineTo(x,y);
		context.stroke();
		var xs=x;
		var ys=y;
		myobj["x2"]=xs;
		myobj["y2"]=ys;
	}else {
		var xt=x;
		var yt=y;
		context.lineTo(xt,yt);
		context.stroke();
		context.closePath();
		context.fillStyle=hcol;
		context.fill();
		c=0;
		x=0;
		y=0;
		myobj["x3"]=xt;
		myobj["y3"]=yt;
		myobj["hcol"]=hcol;
		canvas.removeEventListener('click', triFunc);	
		lista.push(myobj);
		}			
	}	
}

function drawPolygon(canvas, context){
	
	statusB.innerHTML='Ritar polygon Markera minst 5 punkter och avsluta med Rita Polygon ';
	let selectObj=document.getElementById('sel');
	let index=selectObj.selectedIndex;
	let color=selectObj[index].value;
	if (color=='black'){
		document.getElementById('farg').value='#000000';
	}else if (color=='blue') {
		document.getElementById('farg').value='#0000FF';
	}else if (color=='green'){
		document.getElementById('farg').value='#008000';
	}else if(color=='inget') {
		let hcolo=document.getElementById('farg').value;
		document.getElementById('farg').value=hcolo;
	}else {
		document.getElementById('farg').value=color;
	}
	let hcol=document.getElementById('farg').value;
	let c=0;
	context.beginPath();
	canvas.addEventListener('click', polFunc);
	function polFunc(event){
	c=c+1;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;	
	if (c==1){
		let mx=x;
		let my=y;
		context.moveTo(mx,my);		
	}else {		
		context.lineTo(x,y);
		context.stroke();
		
	let menslut=document.getElementById('menslut');
	menslut.addEventListener('click', menSlu);
		function menSlu(event){
			avsluta();
		}	
		let button3=document.getElementById("avbryt");
		button3.onclick=avsluta;
		function avsluta(){	
		if (c<5){
			statusB.innerHTML='Fler punkter krävs för en polygon';
		}else{
		context.closePath();
		context.fillStyle=hcol;
		context.fill();
		c=0;
		canvas.removeEventListener('click', polFunc);
		}
	}	
	}
	}
	
}
function expImg(){
	localStorage.setItem(canvas, canvas.toDataURL());
	statusB.innerHTML='Sparar i HTML5 Local Storage och skriver JSON-sträng';
	/*let hamta=localStorage.getItem(canvas);*/
	
	document.getElementById('jotext').value=JSON.stringify(lista);
}
function impImg(){
	statusB.innerHTML='Hämtar från HTML5 Local Storage ';
	let dataURL=localStorage.getItem(canvas);
	let img = new Image;
	img.src = dataURL;
	img.onload = function(){
		context.drawImage(img, 0, 0);
	};
}

function rensa(){
	statusB.innerHTML='Rensar Canvas ';
	let canvas=document.getElementById("can");
	let context=canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);	
}

let impj=document.getElementById('impj');
impj.addEventListener('click', impJ);
function impJ(){ 
	let lamna=document.getElementById('jotext').value;
	let vasst=JSON.parse(lamna);
	for (let i=0; i<vasst.length;i++){
		let m=vasst[i];
		if (m.id=="rectangle"){
			context.fillStyle=m.hcol;
			context.fillRect(m.mx,m.my,m.x,m.y);
		}else if (m.id=="circle"){
			context.arc(m.x, m.y, m.r, 0, 2*Math.PI, true);
			context.fillStyle=m.hcol;
			context.fill();
		}else if (m.id=="triangle"){
			context.beginPath();
			context.moveTo(m.x1, m.y1);
			context.lineTo(m.x2, m.y2);
			context.lineTo(m.x3, m.y3);
			context.closePath();
			context.fillStyle=m.hcol;
			context.fill();
		}
	}
}

})();

