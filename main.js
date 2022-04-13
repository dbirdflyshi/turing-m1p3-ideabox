//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// query selector variables go here 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var ideaTitle = document.querySelector('#title');
var ideaBody = document.querySelector('#body');
var saveButton = document.querySelector('.builder-button');
var deleteButton = document.querySelector('.saved-ideas-grid');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// event listeners go here 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
saveButton.addEventListener('click', pressSave);
deleteButton.addEventListener('click',deleteIdea);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Global Variables Go here 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var ideas = [];

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// functions and event handlers go here 👇
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function success() {
    // Part of iteration 2- save button disabled if there's no text
    var saveButton = document.querySelector('.builder-button');
    if (document.getElementById('title').value != "" && document.getElementById('body').value != "") {
        saveButton.classList.remove("disabled");
        saveButton.disabled = false;
    } else {
        saveButton.classList.add("disabled");
        saveButton.disabled = true;
    }
}

// This is grand central station for populating the ideabox
function pressSave(){
    event.preventDefault();
    captureIdea();
    clearTextBoxes();
    storeIdea(ideaTitle, ideaBody);
    displayIdea(ideas);
}

function captureIdea(){
    // Part of iteration 2- save button disabled if there's no text
    var saveButton = document.querySelector('.builder-button');
    saveButton.classList.add("disabled");
    saveButton.disabled = true;
    // We're re-evaluating the title and body to get the values of each 
    ideaTitle = document.querySelector('#title').value;
    ideaBody = document.querySelector('#body').value;
}

function clearTextBoxes(){
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
}

function storeIdea(title,body){
    var idea = new Idea(title,body);
    ideas.push(idea);
    console.log(ideas);
}

function deleteIdea(event){
    if (ideas.length === 0){
         alert("You can't delete this idea! When you submit a new one, this one will be overwritten.")    
    } else {
        var id = parseInt(event.target.id);
        ideas = ideas.filter(ideas => ideas.id !== id);
        displayIdea()
    }
}

function displayIdea(){
    var ideaViewer = document.querySelector('.idea-viewer')
    ideaViewer.innerHTML = '';
    for (var i = 0; i < ideas.length; i++) {   
        ideaViewer.innerHTML += 
           ("<article id = "+ideas[i].id+">"+
                "<section class='idea'>"+
                    "<article class='idea-header'>"+
                        "<button class='star-button hidden'><img class='star-img' id="+ideas[i].id+" src='./assets/star-active.svg'></button>"+
                        "<button class='star-button' > <img class='star-img' id="+ideas[i].id+" src='./assets/star.svg'></button>"+
                        "<button class='x-button' > <img class='x-img' id="+ideas[i].id+" src='./assets/delete.svg'></button>"+
                        "<button class='x-button hidden'><img class='x-img' id="+ideas[i].id+" src='./assets/delete-active.svg'></button>"+
                    "</article>"+
                        "<article class='idea-body'>"+
                        "<h3 class='idea-title'>"+ideas[i].title+"</h3 >"+
                        "<p class='idea-message'>"+ideas[i].body+"</p>"+
                    "</article>"+
                "<article class='idea-footer'>"+
                "<button class='comment-button'> <img class='comment-img' src='./assets/comment.svg'></button>"+
                "<p class='footer-p' > Comment</p>"+
                    "</article>"+
                "</section>"+
            "</article>")
    }

}


