// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entryPoint2 = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    debugger;

    entryPoint2.append(CardCreator())
})

function CardCreator(headline, photo, name){
    const card = document.createElement('div'),
          cardHeadline = document.createElement('div'),
          cardAuthor = document.createElement('div'),
          cardImg = document.createElement('img'),
          cardName = document.createElement('span');
          
    card.append(cardHeadline, cardAuthor, cardName);
    cardAuthor.append(cardImg);
    
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');

    cardHeadline.textContent = headline;
    cardImg.src = photo;
    cardName.textContent = name;

    return card;
}
