let demo = document.getElementById("demo");
let btnMolt = document.getElementById("btnMolt");
let btnSottr = document.getElementById("btnSottr");
let btnDiv = document.getElementById("btnDiv");
let btnSomm = document.getElementById("btnSomm");
let canc = document.getElementById("canc");

function somma(num1,num2){
    let somma = num1 + num2;
    return somma;
}

function sottrazione(num1,num2){
    let sottrazione = num1 - num2;
    return sottrazione;
}

function divisione(num1,num2){
    let divisione = num1 / num2;
    return divisione;
}

function moltiplicazione(num1,num2){
    let moltiplicazione = num1 * num2;
    return moltiplicazione;
}

btnSomm.addEventListener("click",function(){
let num1 = document.getElementById("numero1").value;
let num2 = document.getElementById("numero2").value;
demo.innerHTML += "<p>la somma tra " + num1 + " e " + num2 + " è uguale a " + somma(Number(num1),Number(num2)) + "</p>"


})

btnDiv.addEventListener("click",function(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

if(Number(num2) == 0){
    demo.innerHTML += "<p>non si puo dividere per 0</p>"
}
   else {demo.innerHTML += "<p>la divisione tra " + num1 + " e " + num2 + " è uguale a " + divisione(Number(num1),Number(num2)) + "</p>"
}})   

btnSottr.addEventListener("click",function(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
demo.innerHTML += "<p>la sottrazione tra " + num1 + " e " + num2 + " è uguale a " + sottrazione(Number(num1),Number(num2)) + "</p>"
})

btnMolt.addEventListener("click",function(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
demo.innerHTML += "<p>la moltiplicazione tra " + num1 + " e " + num2 + " è uguale a " + moltiplicazione(Number(num1),Number(num2)) + "</p>"
}) 

canc.addEventListener("click",function () {
  demo.innerHTML = "";
  document.getElementById("numero1").value = "";   
  document.getElementById("numero2").value = "";  
})