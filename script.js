console.log('Js Init');
const $ = document.querySelector.bind(document);
const $_ = document.querySelectorAll.bind(document);

let body  =  $("body");
let display = $(".display")
let calculator = $(".body_calculator")
let keyboard = $(".keyboard");
let input = $_("input");


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