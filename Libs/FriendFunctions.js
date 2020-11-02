function FriendShoot() {
    if (friendHealth > 0) {
                if (detectFriend !== true) {
                        if (frameCount % 100 === 0) {
                                var rand = Math.round(random(1,4));
                                switch(rand) {
                                        case 1: FriendBullet1()
                                                break;
                                        case 2: FriendBullet2()
                                                break;
                                        case 3: FriendBullet3()
                                                break;
                                        case 4: FriendBullet4()
                                                break;
                                        default: break;
                                }
                        }
        }
        }
}