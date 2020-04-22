"use strict";

window.addEventListener('load',Initieer);

var txtIngave, txaResult; 
var slcTalen;
var divFeedback;
var slcHoofd,slcDetail;
var slcGenodigden,slcDeelnemers;
var cbxSporten;
var divSporten;
var rdbGeslacht;
var divToonGeslacht;
var frmInvul;

//buttons
var btnToevoegen;
var btnToonEerste,btnToonGeselecteerd,btnToonAantal;
var btnHeen, btnTerug;
var btnToonGeslacht;

const detailInhoud = [['Krokus','Roos','Tulp'], ['Eik','Es','Populier'],['Aap', 'Beer','Hond','Schaap']];


function Initieer(){
  //  DOM elementen ophalen
  BindElements();
  // Eventlisteners toevoegen
  addEvents();
}


//FUNCTIONS

/**
 * Binds the HTML elements
 */
function BindElements()
{
  txtIngave = document.getElementById("txtIngave");
  txaResult = document.getElementById("txaResult");
  slcTalen = document.querySelector('#slcTalen');
  slcHoofd = document.querySelector('#slcHoofd');
  slcGenodigden = document.querySelector('#slcGenodigden');
  slcDeelnemers = document.querySelector('#slcDeelnemers');
  slcDetail = document.querySelector('#slcDetail');
  divFeedback = document.querySelector('#divFeedback');
  divSporten = document.querySelector('#divSporten');
  divToonGeslacht = document.querySelector('#divToonGeslacht');
  btnToevoegen = document.querySelector("#btnToevoegen");
  btnToonEerste = document.querySelector('#btnToonEerste');
  btnToonGeselecteerd = document.querySelector('#btnToonGeselecteerd');
  btnToonAantal = document.querySelector('#btnToonAantal');
  btnHeen = document.querySelector('#btnHeen');
  btnTerug = document.querySelector('#btnTerug');
  btnToonGeslacht = document.querySelector('#btnToonGeslacht');
  cbxSporten = document.querySelectorAll('input[type="checkbox"]');
  rdbGeslacht = document.getElementsByName('geslacht');
  frmInvul = document.querySelector('#frmInvul');
}

function addEvents()
{
  btnToevoegen.addEventListener('click',VulTextArea);
  btnToonEerste.addEventListener('click',ToonEerste);
  btnToonGeselecteerd.addEventListener('click',ToonGeselecteerd);
  btnToonAantal.addEventListener('click',ToonAantal);
  btnHeen.addEventListener('click',()=> Doorgeef(slcGenodigden,slcDeelnemers));
  btnTerug.addEventListener('click', ()=> Doorgeef(slcDeelnemers,slcGenodigden));
  btnToonGeslacht.addEventListener('click',ToonGeslacht);
  slcHoofd.addEventListener('change',ToonDetaillijst);
  slcDetail.addEventListener('dblclick',VerwijderElement);
  frmInvul.addEventListener('submit',Controle);
  //add events aan checkboxes
  VoegEventlistenersToeAanCheckboxen();
}


/**
 * voorbeeld 1 Tekstvakken tekstgebieden
 */
function VulTextArea()
{
    
}
/**
 * Voorbeeld 2 Selectie uitlezen
 * Toon eerste element
 */
function ToonEerste()
{
  
}
/**
 * Selectie uitlezen
 * toon geselecteerde element
 */
function ToonGeselecteerd()
{
  
}
/**
 * Selectie uitlezen
 * Toon aantal elementen
 */
function ToonAantal()
{
  
}
/**
 * Voorbeeld 3: Select element uitlezen
 */
function ToonDetaillijst()
{
  
}
/**
 * Voorbeeld 3: Select element uit lijst verwijderen
 */
function VerwijderElement()
{
  
}

/**
 * Voorbeeld 4: Meervoudige selectie
 * @param {*} van 
 * @param {*} naar 
 */
function Doorgeef(van,naar)
{
  
}

/**
 * Voorbeeld 5: Checkboxen uitlezen
 */
function VulDivSporten()
{
  
  
}
/**
 * Voorbeeld 6
 * Selectie van radiobuttons
 */
function ToonGeslacht()
{
  
}

/**
 * Voorbeeld 7
 * Controle Formulier
 */
function Controle()
{
  
}

/**
 * Voegt eventlisteners toe aan checkboxen
 */
function VoegEventlistenersToeAanCheckboxen()
{
  for (let i = 0 ; i<cbxSporten.length; i++){
    cbxSporten[i].addEventListener('change',VulDivSporten);
  }

}




