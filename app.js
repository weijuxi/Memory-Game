// variable
const cardArray = [
    {
        name:'nut',
        img:'images/nut.png',
    },
    {
        name:'HD_Explode_O_Nut', 
        img:'images/HD_Explode_O_Nut.png',
    },
    {
        name:'HD_Sun_Shroom',
        img:'images/HD_Sun_Shroom.png',
    },

    {   
        name:'HDplus_snowpea',
        img:'images/HDplus_snowpea.png',
    },

    {
        name:'plant',
        img:'images/plant.png',
    },

    {
        name:'Hypno-shroom-hd',
        img:'images/Hypno-shroom-hd.png',
    },

    {
        name:'Sunflower',
        img:'images/Sunflower.png',
    },

    {
        name:'PotatoMine',
        img:'images/PotatoMine.png',
    },
]

let count = 0
let firstGuess = ''
let secondGuess = ''
let previousTarget = null


//duplicate cardArray to create a match for each card
let gameGrid = cardArray.concat(cardArray);
//randomize the game grid on each load
gameGrid.sort(() => 0.5 - Math.random());


//create the game board
const game = document.querySelector('.game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);


//show cardArray 
// cardArray.forEach(item => {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     card.dataset.name = item.name;

//     //Add back of card
//     card.style.backgroundImage = `url(${item.img})`;

//     grid.appendChild(card);
// });


// foreach card in grid
gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;


    //Add front of card
    const front = document.createElement('div');
    front.classList.add('front');


    //Add back of card
    const back = document.createElement('div');
    back.classList.add('back');
    card.style.backgroundImage = `url(${item.img})`;


    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});


const checkMatch = () => {
    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
};


const reset = () => {

    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    //remove selected class from selected cards
    let selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
};  


//----------------------------------------------------------Event Listener----------------------------------------------------------
//add event listener to each card
grid.addEventListener('click', function(event) {
    let clicked = event.target;

    //only select cards
    if(clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') || clicked.parentNode.classList.contains('match')) {
        return;
    }

    //add selected class to selected cards
    if(count < 2) {
        count++;
        if (count === 1) {
            // Assign first guess
            firstGuess = clicked.parentNode.dataset.name
            console.log(firstGuess)
            clicked.parentNode.classList.add('selected')
          } else {
            // Assign second guess
            secondGuess = clicked.parentNode.dataset.name
            console.log(secondGuess)
            clicked.parentNode.classList.add('selected')
          }
          if (firstGuess&& secondGuess) {
            // and the first guess matches the second match...
            if (firstGuess === secondGuess) {
              //apply match css
                setTimeout(checkMatch, 1000);
            } 
                //if they don't match, reset class
                setTimeout(reset, 1000);
        }
        previousTarget = clicked;
    }
});