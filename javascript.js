let order = [];
let Clickorder = [];
let Score = 0;

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
    


}
