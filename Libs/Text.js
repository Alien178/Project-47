function Words() {

    if (level == 1) {
        textSize(25);
        textFont(font);
        fill("white");
        text("Reminder:\n You can use the key [A] or \n the [Left Arrow] Key to move left!\n You can use the key [D] or \n the [Right Arrow] Key to move left! \n You can Jump by using the [Space Bar]", windowWidth / 8, windowHeight / 3);
    }

    if (level == 2) {
        textSize(25);
        textFont(font);
        fill("white");
        text("Left Click to Shoot!", windowWidth / 8, windowHeight / 2);
    }

    if (detectFriend == false) {
        textSize(25);
        textFont(font);
        fill("white");
        //textStyle("Bold Italic");
        text("Health:"+ health, 25, 35);
        text("Mana:" + mana, 25, 70);
        text("Level:" + level, 25, 105);
    }
    
    if (detectFriend == true) {
        textSize(25);
        textFont(font);
        fill("white");
        //textStyle("Bold Italic");
        text("Health:"+ health, 25, 35);
        text("Friend Health:"+ friendHealth, 25, 70);
        text("Mana:" + mana, 25, 105);
        text("Level:" + level, 25, 140);
    }

    if (timer <= 50 && timer >= -50) {
        //detectFriend = true;
        textSize(22);
        textFont(font);
        fill("white");
        text("You have defeated me, so \nI will protect and \nhelp you till you finish your quest.", friend1.x - 200, friend1.y - 250);
    }

    if (timer <= -55 && timer >= -75) {
        //detectFriend = true;
        textSize(22);
        textFont(font);
        fill("white");
        text("Just a second, I will summon the portal", friend1.x - 200, friend1.y - 200);
    }

}