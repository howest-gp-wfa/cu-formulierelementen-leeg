"use strict";

window.addEventListener('load',initialize);

let inpInput,txaResult; 
let slcLanguages;
let divFeedback;
let slcHead,slcDetail;
let slcInvites,slcParticipants;
let cbxSports;
let divSports;
let rdbSex;
let divShowSex;
let frmFill;

//buttons
let btnAdd;
let btnShowFirst,btnShowSelected,btnShowQuantity;
let btnAway, btnBack;
let btnShowSex;

const details = [['Krokus','Roos','Tulp'], ['Eik','Es','Populier'],['Aap', 'Beer','Hond','Schaap']];


function initialize(){
  //  DOM elementen ophalen
  bindElements();
  // Eventlisteners toevoegen
  addEvents();
}


//FUNCTIONS

/**
 * Binds the HTML elements
 */
function bindElements() {
  inpInput = document.querySelector("#input");
  txaResult = document.querySelector("#result");
  slcLanguages = document.querySelector('#languages');
  slcHead = document.querySelector('#head');
  slcInvites = document.querySelector('#invites');
  slcParticipants = document.querySelector('#participants');
  slcDetail = document.querySelector('#detail');
  divFeedback = document.querySelector('#feedback');
  divSports = document.querySelector('#sports');
  divShowSex = document.querySelector('#show-sex-result');
  
  btnAdd = document.querySelector("#add");
  btnShowFirst = document.querySelector('#show-first');
  btnShowSelected = document.querySelector('#show-selected');
  btnShowQuantity = document.querySelector('#show-number-of');
  btnAway = document.querySelector('#away');
  btnBack = document.querySelector('#back');
  btnShowSex = document.querySelector('#show-sex');
  
  cbxSports = document.querySelectorAll('input[type="checkbox"]');
  rdbSex = document.getElementsByName('sex');
  frmFill = document.querySelector('#fill');
}

function addEvents() {
  btnAdd.addEventListener('click',fillTextArea);
  btnShowFirst.addEventListener('click',showFirst);
  btnShowSelected.addEventListener('click',showSelected);
  btnShowQuantity.addEventListener('click',showNumberOfElements);
  btnAway.addEventListener('click',()=> pass(slcInvites,slcParticipants));
  btnBack.addEventListener('click', ()=> pass(slcParticipants,slcInvites));
  btnShowSex.addEventListener('click',showSex);
  slcHead.addEventListener('change',showDetailList);
  slcDetail.addEventListener('dblclick',removeElement);
  frmFill.addEventListener('submit',checkForm);
  //add events aan checkboxes
  addEventListenersToCheckboxes();
}


/**
 * voorbeeld 1 Tekstvakken tekstgebieden
 */
function fillTextArea() {
    
}
/**
 * Voorbeeld 2 Selectie uitlezen
 * Toon eerste element
 */
function showFirst() {
  
}
/**
 * Selectie uitlezen
 * toon geselecteerde element
 */
function showSelected() {
  
}
/**
 * Selectie uitlezen
 * Toon aantal elementen
 */
function showNumberOfElements() {
  
}
/**
 * Voorbeeld 3: Select element uitlezen
 */
function showDetailList() {
  
}
/**
 * Voorbeeld 3: Select element uit lijst verwijderen
 */
function removeElement() {
  
}

/**
 * Voorbeeld 4: Meervoudige selectie
 * @param {*} van 
 * @param {*} naar 
 */
function pass(van,naar) {
  
}

/**
 * Voorbeeld 5: Checkboxen uitlezen
 */
function fillDivSports() {
  
  
}
/**
 * Voorbeeld 6
 * Selectie van radiobuttons
 */
function showSex() {
  
}

/**
 * Voorbeeld 7
 * Controle Formulier
 */
function checkForm() {
  
}

/**
 * Voegt eventlisteners toe aan checkboxen
 */
function addEventListenersToCheckboxes() {
  for (let i = 0 ; i<cbxSports.length; i++){
    cbxSports[i].addEventListener('change',fillDivSports);
  }

}




