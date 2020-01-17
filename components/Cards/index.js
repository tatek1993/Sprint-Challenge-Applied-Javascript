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


// <div class="card">
//     <div class="headline">ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects</div>
//     <div class="author">
//         <img src="./assets/sir.jpg">
//     </div>
//     <span>SIR RUFF'N'STUFF</span>
// </div>


const entryPoint2 = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    // debugger;
     const articlesArray = Object.values(response.data.articles);
    articlesArray.forEach(array => {
       

        array.forEach(article => {
            entryPoint2.append(CardCreator(article.headline, article.authorPhoto, article.authorName))    
         })    
    })
    
})

function CardCreator(headline, photo, name){
    const card = document.createElement('div'),
          cardHeadline = document.createElement('div'),
          cardAuthor = document.createElement('div'),
          imgContainer = document.createElement('div'),
          cardImg = document.createElement('img'),
          cardName = document.createElement('span');
          
    card.append(cardHeadline, cardAuthor, cardName);
    imgContainer.append(cardImg);
    cardAuthor.append(imgContainer,cardName);
    
    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    imgContainer.classList.add('img-container');

    cardHeadline.textContent = headline;
    cardImg.src = photo;
    cardName.textContent = name;

    return card;
}
