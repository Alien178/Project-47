function LevelOne() {
    player.x = windowWidth / 12; 
    player.y = windowHeight / 1.25;
    ground.x = windowWidth / 2; 
    ground.y = height;
    portalKey.x = windowWidth / 1.25;
    portalKey.y = windowHeight / 1.25;
    portalKey.visible = true;
}

function LevelTwo() {
    player.x = windowWidth / 12; 
    player.y = windowHeight / 1.25;
    ground.x = windowWidth / 2; 
    ground.y = height;
    //ground.visible = false;
    friend1.x = windowWidth / 1.5;
    friend1.y = windowHeight / 3;
    friend1.visible = true;
}