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


// foreach card in gamegrid
// same as above
gameGrid.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;

    //Add back of card
    card.style.backgroundImage = `url(${item.img})`;

    grid.appendChild(card);
});