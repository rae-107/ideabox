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
var ideaCardGrid = document.querySelector('.idea-card-grid')
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
        displayIdeas()
        clearForm()
    } 
}

function displayIdeas() {
    ideaCardGrid.innerHTML = ''
    for(var i = 0; i < ideas.length; i++) {
        ideaCardGrid.innerHTML += `<section class="idea-card">
        <section class="card-nav">
            <button type="button" name="star" id="star-button">
            <button type="button" name="delete" id="delete-button">
        </section>
        <section class="card-body">
            <p class="idea-title">${ideas[i].title}</p>
            <p class="idea-body">${ideas[i].body}</p>
        </section>
        <section class="comment-bar">
            <button type="button" name="comment" id="comment-button">
            </button>
            <label for="comment">Comment</label>
        </section>
    </section>`

    }
}

function clearForm() {
    titleInput.value = ''
    bodyInput.value = ''
}
