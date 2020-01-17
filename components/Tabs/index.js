// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entryPoint = document.querySelector('.topics');

// axios.get("https://lambda-times-backend.herokuapp.com/topics")
// .then( response => {
//     debugger;
//     console.log(response.data.topics);

//     entryPoint.append(TabCreator(response.data.topics))
// })


axios.get('https://lambda-times-backend.herokuapp.com/topics') 
.then( response => {
    response.data.topics.forEach(topic => {
    entryPoint.append(TabCreator(topic)) 
    // debugger;
    })
})


function TabCreator(item) {
    const tabTopic = document.createElement('div');

    tabTopic.classList.add('tab');

  
    tabTopic.textContent = item;

    return tabTopic;

}