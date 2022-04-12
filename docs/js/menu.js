const breakfast = [
    {
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    },
    {
        title: 'Coffe with pancakes',
        description: 'lorem ipsum doctor sit amel concoctetur apsinumbe',
        price: '16'
    }
]

let offset = 0;
let limit = 7;

const breakfastContainer = document.querySelector('.cards__breakfast')

// FUNCTION

function generatorCard(id) {
    createCard(breakfast[id])
}

function generatorCards(offset, limit) {
    for (let i = offset; i <= offset + limit ; i++) {
        generatorCard(i);
    }
}

function createCard(card){
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card__container')

    const cardTitle = document.createElement('h5')
    cardTitle.textContent = card.title

    const cardBody = document.createElement('div')
    cardBody.classList.add('card__body')
    
    const cardDescription = document.createElement('p')
    cardDescription.textContent = card.description
    cardDescription.classList.add('body__description')


    const cardSeparator = document.createElement('div')
    cardSeparator.classList.add('body__separator')


    const cardPrice = document.createElement('p')
    cardPrice.textContent = '$'+card.price
    cardPrice.classList.add('body__price')

    cardContainer.appendChild(cardTitle)
    cardBody.appendChild(cardDescription)
    cardBody.appendChild(cardSeparator)
    cardBody.appendChild(cardPrice)
    cardContainer.appendChild(cardBody)
    breakfastContainer.appendChild(cardContainer)

}

generatorCards(offset, limit)
