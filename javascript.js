const { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } = require("constants");
const { lookupService } = require("dns");

let order = [];
let Clickorder = [];
let score = 0;

//0 = blue
//1 = yellow
//2 = red
//3 = green

const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');

let shuffLeOrder = () => {
    let colorOrder = Math.floor(Math.random() *4);
    order[order.length] = colorOrder;
    Clickorder = [];
    
    for(let i in order){
        let elementColor = createColorElement (order[i]);
        lightcolor(elementColor, Number(i)+1);

    }

}

let lightcolor=(element,number) => {
    number = number *500;
    setTimeout(()=>{
        element.classList.add("selected");
    }, number - 250);
    setTimeout(()=>{
        element.classList.remove("selected")});
}

let checkorder = ()=> {
    for(let i in Clickorder){
        if(Clickorder[1] != order[1]){
            gameOver();
            break;
        }
    }
    if(Clickorder.length == order.length){
        alert('pontuação: ${score}!\nParabéns! Você acertou! Vamos para o proximo nivel ')
        nextLevel();
    }
}

let click = (color)=> {
    Clickorder[Clickorder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkorder();
    },250);
    

}

let createColorElement = (color) =>{
    if(color == 0){
        return blue;
    }else if(color == 1){
        return yellow;
    }else if(color == 2){
        return red;
    }else if(color == 3){
        return green;
    }
}

let nextLevel = () =>{
    score++;
    shuffLeOrder();
}


let gameOver = ()=>{
    alert('Pontuação: ${score}!\nVoçê perdeu o jogo\nClique me Ok para inciar um novp jogo');
    order = [];
    Clickorder= [];

    playgame();
}

let playgame= () => {
    alert('Bem vindo ao Gênesis! Iniciando um novo jogo')
    score= 0;

    nextLevel();
}

blue.onclick = () => click[0];
yellow.onclick = () => click[1];
red.onclick = () => click[2];
green.onclick = () => click[3];



playgame();
