var monImage = document.querySelector('img');
monImage.onclick = function() {
	var maSrc = monImage.getAttribute('src');
	if(maSrc === 'images/plage.png') {
		monImage.setAttribute ('src','images/central20galactic.jpg');
	} else {
		monImage.setAttribute ('src','images/plage.png');
	}
 }
 var monBouton = document.querySelector('button');
 var monTitre = document.querySelector('h1');
 function definirNomUtilisateur() {
	 var monNom = prompt('Bienvenue chez JEAN BLANCHARD BOMOUA');
	 localStorage.setItem('nom', monNom );
	 monTitre.textContent = 'Changeons notre vie, ' + monNom; 
 }
 if(!localStorage.getItem('nom')) {
	 definirNomUtilisateur();
  } else {
	  var nomEnregistre = localStorage.getItem('nom');
	  monTitre.textContent = 'Changeons notre vie, ' +nomEnregistre;
  }
  monBouton.onclick = function() {
	  definirNomUtilisateur();
  }