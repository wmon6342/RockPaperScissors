function computerChoice(){
    let x = Math.floor(Math.random() * 100);
    if (x <= 33) {
        return 'rock';
    } else if (x <= 66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let x = 0;
let y = 0;


const p = document.querySelector('.human');
const c = document.querySelector('.computer');
const t = document.querySelector('.tally');
const w = document.querySelector('.winner');

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    t.textContent = `Humans : ${x}, Computers : ${y}`;
    if(x === 5) {
        w.textContent = 'humans have won';
    }  
    if(y === 5) {
        w.textContent = 'computers have won';
    }
    if(computerChoice() === 'rock') {
        p.textContent = 'u draw';
        c.textContent = ':?';
    } else if (computerChoice() === 'scissors') {
        p.textContent = 'u win'
        c.textContent = ':O';
        x++;
    } else {
        p.textContent = 'u lose';
        c.textContent = ':)'
        y++;
    };
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    t.textContent = `Humans : ${x}, Computers : ${y}`;
    if(computerChoice() === 'paper') {
        p.textContent = 'u draw';
        c.textContent = ':?';
    } else if (computerChoice() === 'rock') {
        p.textContent = 'u win'
        c.textContent = ':O';
        x++;
    } else {
        p.textContent = 'u lose';
        c.textContent = ':)'
        y++;
    };
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    t.textContent = `Humans : ${x}, Computers : ${y}`;
    if(computerChoice() === 'scissors') {
        p.textContent = 'u draw';
        c.textContent = ':?';
    } else if (computerChoice() === 'paper') {
        p.textContent = 'u win'
        c.textContent = ':O';
        x++;
    } else {
        p.textContent = 'u lose';
        c.textContent = ':)'
        y++;
    };
});





