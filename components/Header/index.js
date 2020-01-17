// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(date, title, temp) {

    const headerDiv = document.createElement('div'),
          headerDate = document.createElement('span'),
          headerTitle = document.createElement('h1'),
          headerTemp = document.createElement('span');

    headerDiv.append(headerDate); 
    headerDiv.append(headerTitle);  
    headerDiv.append(headerTemp);    
    
    headerDiv.classList.add('header');
    headerDate.classList.add('date');
    headerTemp.classList.add('temp');

    headerDate.textContent = date; //'MARCH 28, 2019';
    headerTitle.textContent = title;//'Lambda Times';
    headerTemp.textContent = temp;//'98°';

    return headerDiv;
}

Header('MARCH 28, 2019', 'Lambda Times', '98°');

const headerContainer = document.querySelector('.header-container');

headerContainer.append(Header('MARCH 28, 2019', 'Lambda Times', '98°'));
console.log()


