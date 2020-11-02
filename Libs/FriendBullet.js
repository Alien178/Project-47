function FriendBullet1() {
    var FriendB1 = createSprite(10000, 10000, 10, 10);
    FriendB1.addImage("Fbullet1", friendBulletSprite);
    FriendB1.setCollider("circle", 100, 0, 100);
    FriendB1.x = friend1.x, FriendB1.y = friend1.y;
    FriendB1.scale = (displayWidth + displayHeight) / 22000;
    FriendB1.rotateToDirection = true;
    //FriendB1.debug = true;
    FriendB1.maxSpeed = 500;
    if (followPlayer == false) {
        FriendB1.attractionPoint(12, player.x, player.y);
    } else {
        FriendB1.attractionPoint(12, mouseX, mouseY);
    }
    FriendB1.lifetime = 200;
    friendBulletGroup.add(FriendB1);       
}

function FriendBullet2() {
    var FriendB2 = createSprite(10000, 10000, 10, 10);
    FriendB2.addImage("Fbullet2", friendBulletSprite);
    FriendB2.setCollider("circle", 100, 0, 100);
    FriendB2.x = friend1.x, FriendB2.y = friend1.y;
    FriendB2.scale = (displayWidth + displayHeight) / 22000;
    FriendB2.rotateToDirection = true;
    FriendB2.maxSpeed = 500;
    if (followPlayer == false) {
        FriendB2.attractionPoint(12, player.x, player.y);
    } else {
        FriendB2.attractionPoint(12, mouseX, mouseY);
    }
    FriendB2.lifetime = 200;
    friendBulletGroup2.add(FriendB2);       
}

function FriendBullet3() {
    var FriendB3 = createSprite(10000, 10000, 10, 10);
    FriendB3.addImage("Fbullet3", friendBulletSprite);
    FriendB3.setCollider("circle", 100, 0, 100);
    FriendB3.x = friend1.x, FriendB3.y = friend1.y;
    FriendB3.scale = (displayWidth + displayHeight) / 22000;
    FriendB3.rotateToDirection = true;
    FriendB3.maxSpeed = 500;
    if (followPlayer == false) {
        FriendB3.attractionPoint(12, player.x, player.y);
    } else {
        FriendB3.attractionPoint(12, mouseX, mouseY);
    }
    FriendB3.lifetime = 200;
    friendBulletGroup3.add(FriendB3);       
}

function FriendBullet4() {
    var FriendB4 = createSprite(10000, 10000, 10, 10);
    FriendB4.addImage("Fbullet1", friendBulletSprite);
    FriendB4.setCollider("circle", 100, 0, 100);
    FriendB4.x = friend1.x, FriendB4.y = friend1.y;
    FriendB4.scale = (displayWidth + displayHeight) / 22000;
    FriendB4.rotateToDirection = true;
    FriendB4.maxSpeed = 500;
    if (followPlayer == false) {
        FriendB4.attractionPoint(12, player.x, player.y);
    } else {
        FriendB4.attractionPoint(12, mouseX, mouseY);
    }
    FriendB4.lifetime = 200;
    friendBulletGroup4.add(FriendB4);       
}