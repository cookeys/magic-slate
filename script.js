var canvas;
var A,B; // New point , Old point
var run=false; // Go true if left click is pressed
var coulCrayon="red";
var coulArdoise="#1c1c1c";
var mineCrayon=2;
var outil="stylo"; 
				
function init()
{
	canvas = new graphics('toile');
    document.getElementById("toile").style.cursor="url('stylo.png'), pointer";
}

//Fonction appelée lors du click gauche
function poserCrayon(event)
{
	run=true;
	A=canvas.getMousePosition(event);			
}

//Fonction appelée lors du déplacement de la souris
function ecrire(event)
{
	if ((run==true)&&(outil=="stylo"))
	{
		B=canvas.getMousePosition(event);
		canvas.drawLine(A,B,coulCrayon,mineCrayon);
		A=B;
	}

	if ((run==true)&&(outil=="gomme"))
	{
		B=canvas.getMousePosition(event);
        canvas.drawFillCircle(B,mineCrayon,coulArdoise);
	}
}

//Fonction appelée lors du relachement du click gauche
function leverCrayon(event)
{
	run=false;					
}

//Fonction appelée lors du click sur le bouton effacer
function effacer()
{
	canvas.clear();
}

//Fonction appelée lors du click sur le carre de couleur variable.
//La couleur reçue en paramètre est affecté à la variable coulCrayon.
function changeMagic(couleurRecu)
{
    coulCrayon=document.getElementById("magic").value;
    changeOutils("stylo");
}

//Fonction appelée lors du click sur un carre de couleur
function changeCouleur(couleurRecu)
{
	coulCrayon=couleurRecu;	
	changeOutils("stylo");
}

//Fonction appelée lors du click sur les images gomme.png ou stylo.png
function changeOutils(outilRecu)
{
	outil=outilRecu;
	if (outilRecu=="gomme") 
	{
		document.getElementById("imStylo").style.backgroundColor="white";
		document.getElementById("imGomme").style.backgroundColor="white";
		document.getElementById("toile").style.cursor="url('gomme.png'), pointer";

	}
	if (outilRecu=="stylo") 
		{
		document.getElementById("imStylo").style.backgroundColor=coulCrayon;
		document.getElementById("imGomme").style.backgroundColor="white";
		document.getElementById("toile").style.cursor="url('stylo.png'), pointer";	
		}
}

//Fonction appelée lors du click sur un carre de mine
//Le nombre reçu en paramètre est affecté à la variable mineCrayon.
function changeMine(par)
{
	mineCrayon=par;
}
