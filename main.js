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
deleteButton.addEventListener('click', ideaAction);

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
    displayIdeas(ideas);
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
}

function ideaAction(event){
    var id = parseInt(event.target.id);  
    var className = event.target.className;
    deleteIdea(id,className)
    favoriteIdea(id)
}

function deleteIdea(idNum,className){
    if (className === 'x-img'){
        ideas = ideas.filter(ideas => ideas.id !== idNum );
        displayIdeas()
    }
}

function favoriteIdea(idNum) {
    for (var i = 0; i < ideas.length; i++) {
        if (ideas[i].id === idNum && ideas[i].starred === false) {
            ideas[i].starred = true;
        }else if (ideas[i].id === idNum && ideas[i].starred === true){
            ideas[i].starred = false;
        }
    } 
    displayIdeas()
}

function changeStar(index) {
    if (ideas[index].starred === true) {
        output = "<button class='star-button-active' id=" + ideas[index].id + "><img class='star-img-active' id=" + ideas[index].id + " src='./assets/star-active.svg'></button>"
    } else {
        output = "<button class='star-button'id=" + ideas[index].id + " > <img class='star-img' id=" + ideas[index].id + " src='./assets/star.svg'></button>"
    }
    return output;
}

function displayIdeas(){
    var ideaViewer = document.querySelector('.idea-viewer')
    ideaViewer.innerHTML = '';
    for (var i = 0; i < ideas.length; i++) {   
        ideaViewer.innerHTML += 
           ("<article id = "+ideas[i].id+">"+
                "<section class='idea'>"+
                    "<article class='idea-header'>"+
                        changeStar(i)+
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


