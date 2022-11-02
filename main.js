//main.js file that contains all DOM related JavaScript.

//Next step would be to create instances of our Idea Class

// Variables
var ideas = []
var newIdea;
// JQuery Selectors

// Main
// inputs
// buttons
var showStarredIdeaButton = document.querySelector('#show-starred-button')

// Form
// inputs
var titleInput = document.querySelector('#title-input')
var bodyInput = document.querySelector('#body-input')
var searchInputValue = document.querySelector('#search-input')
// buttons
var searchButton = document.querySelector('#search-button')
var saveButton = document.querySelector('#save-button')

// Cards
// inputs
var ideaCard = document.querySelector('.idea-card')
var ideaTitle = document.querySelector('.idea-title')
var ideaBody = document.querySelector('.idea-body')
// buttons
var starButton = document.querySelector('#star-button')
var deleteButton = document.querySelector('#delete-button')

// Add Event Listeners
showStarredIdeaButton.addEventListener('click', function() {

})
saveButton.addEventListener('click', function() {
saveIdea()
displayIdeas()
})
searchButton.addEventListener('click', function() {

})
starButton.addEventListener('click', function() {

})
deleteButton.addEventListener('click', function() {

})

// Functions and Event Handlers

function saveIdea(title, body) {
    newIdea = new Idea(title, body)
    newIdea.title = titleInput.value
    newIdea.body = bodyInput.value
    if (titleInput.value !== '' && bodyInput.value !== '') {
        ideas.push(newIdea) 
    } 
}

function displayIdeas() {
    ideaTitle.innerText = newIdea.title
    ideaBody.innerText = newIdea.body
}
