class Idea{
    constructor(title,body){
        this.id = Date.now();
        this.title = title;
        this.body = body;
        this.starred = false;
    }

    updateIdea(){
        this.starred = true;
    }
}