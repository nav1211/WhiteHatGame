class Story{

    constructor(){
        //this.title = createElement('h2');
        this.story = createElement('h3');
        this.story2 = createElement('h3');
        this.title = createElement('h2');
    }

    displayStory(){
        //this.title.html("Daring Mountain Escape");
        //this.title.position(displayHeight-200, 100);
        this.story.html("One night, Timothy was being chased by a coup. After escaping for 30 minutes, he ran into a mountain. There is no time to waste, he must escape to his city as quick as possible.");
        this.story.position(displayWidth-1500, displayHeight/2);
        this.story2.html("It is now up to you to save Timothy.");
        this.story2.position(displayWidth-900, displayHeight/2+50)
        //  image(titleImg, displayWidth - 1000, 50);
    }

    hide(){
        //this.title.hide();
        this.story.hide();
        this.story2.hide();
    }
}