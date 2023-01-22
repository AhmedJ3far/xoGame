let title = document.querySelector(".title");
let squares = document.querySelector(".square");

let squareElement  = [];

let turn = 'X';


function last(num1,num2,num3){
        document.getElementById("item"+ num1).style.background = '#000';
        document.getElementById("item"+ num2).style.background = '#000';
        document.getElementById("item"+ num3).style.background = '#000';
        title.innerHTML = ` The ${squareElement[num1]} is Winner Now`;

        setInterval(function*(){
            title.innerHTML += '.';
        }, 1000);

        setTimeout(function(){
            location.reload()
        }, 2000);
}


function drawSet(){
    for(i=1; i<10; i++){
        
        document.getElementById("item" + i).style.background = '#777';
    }
    title.style.background = '#777';

    setTimeout(function(){
        location.reload()
    }, 2000);
}
function winner(){

    for(i = 1; i < 10 ; i++){
        squareElement[i] = document.getElementById("item" + i).innerHTML;
    }

    if(squareElement[1] === squareElement[2] && squareElement[2] === squareElement[3] && squareElement[1]  != ''){
        
        last(1,2,3);
    }else if(squareElement[4] === squareElement[5] && squareElement[5] === squareElement[6] && squareElement[4] != ''){
        last(4,5,6);
    }else if(squareElement[7] === squareElement[8] && squareElement[8] === squareElement[9] && squareElement[8] != ''){
        last(7,8,9);
    }
    if(squareElement[1] === squareElement[4] && squareElement[4] === squareElement[7] && squareElement[4]  != ''){
        last(1,4,7);
    }else if(squareElement[2] === squareElement[5] && squareElement[5] === squareElement[8] && squareElement[5] != ''){
        last(2,5,8);
    }else if(squareElement[3] === squareElement[6] && squareElement[6] === squareElement[9] && squareElement[6] != ''){
        last(3,6,9);
    }
    else if(squareElement[1] === squareElement[5] && squareElement[5] === squareElement[9] && squareElement[5] != ''){
        last(1,5,9);
    }else if(squareElement[3] === squareElement[5] && squareElement[5] === squareElement[7] && squareElement[5] != ''){
        last(3,5,7);
    }else if (squareElement[1] != '' && squareElement[2] != '' && squareElement[3] != '' && squareElement[4] !='' && squareElement[5] != ''&& squareElement[6] != ''&& squareElement[7] != ''&& squareElement[8] != ''&& squareElement[9] != ''){
        title.innerHTML = 'The Game End In Draw';
        drawSet();
    }
}


function game(id){

    let element = document.getElementById(id);
    if(turn === 'X' && element.innerHTML == ''){
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O TURN'

    }else if(turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X TURN'
    }
    winner();

}
