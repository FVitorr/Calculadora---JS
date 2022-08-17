console.log('Js Init');
const $ = document.querySelector.bind(document);
const $_ = document.querySelectorAll.bind(document);

let body  =  $("body");
let display = $(".display")
let calculator = $(".body_calculator")
let keyboard = $(".keyboard");
let input = $_("input");

//Bloco para criar as teclas na tela
let keyl = [7,8,9,"/",4,5,6,"X",1,2,3,"-",0,".","=","+"];
let controle = 0
for (let i = 0; i < 4; i++){
    let line = document.createElement("div");
    line.setAttribute("class","line");
    for (let j = 0; j < 4; j++){
        if (typeof(keyl[controle]) == "string"){
            let value = keyl[controle].toString()
            line.innerHTML += `<input type = button class = "signals" value = "`+ keyl[controle] +
            `" onclick="subValue('`+ value +`')">`
        }else{
            line.innerHTML += `<input type = button class = "" value = "`+ keyl[controle] +
            `" onclick="subValue(`+ keyl[controle] +`)">`
        }
        controle++;
    }
    keyboard.appendChild(line);
}

function clearElemnt(selector){
    selector.innerHTML = '';
}

function AddElemnt(selector,text){
    selector.innerHTML += text;
}

let opDisplay = $(".entry")
let reDisplay = $("#result")
//Bloco que trata das entradas
let op = 0; // 0 -
let num_ = [];
let fNum = ''
function subValue(value){
    //console.log(value);
    if (typeof(value) == "number") {
        fNum += value
        //console.log(fNum);
        AddElemnt(opDisplay,value);
    } else {
        console.log(typeof(value));
        num_.push(fNum,value);
        //num_.push(value);
        if (typeof(value) != "number") {
            fNum = ''
        }
        if (value == '='){
            let result = 0;
            clearElemnt(opDisplay)
            let num1 = parseFloat(num_[0]);
            let num2 = parseFloat(num_[2]);
            if (num_[1] == '/'){ // Sinal
                result = num1 / num2;
            } else if (num_[1] == 'X'){ // Sinal
                result = num1 * num2;
            } else if (num_[1] == '-'){ // Sinal
                result = num1 - num2;
            } else if (num_[1] == '+'){ // Sinal
                result = num1 + num2;
            }
            clearElemnt(reDisplay);
            AddElemnt(reDisplay,result);
        }else {
            AddElemnt(opDisplay,' ' + value + ' ');
        }
    }
    //console.log(value);
    //console.log(num_);
}





let color = 0 // 0-White 1-Black

//Mode Dark
function black(){
    body.style.backgroundColor = "rgb(24,24,24)";
    display.style.backgroundColor = "rgb(34,37,45)";
    calculator.style.backgroundColor = "rgb(34,37,45)";
    keyboard.style.backgroundColor = "rgb(42,45,55)";
    for (i in input){
        input[i].style.backgroundColor = "rgb(40,43,51)";
    }
    console.log("Black");
}

function white(){
    console.log("White");
}