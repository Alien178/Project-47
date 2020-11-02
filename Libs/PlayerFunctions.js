function playerMove() {
    //Player Gravity;
      player.velocityY = player.velocityY + 1;

    //Move Right & Left
      if (keyDown("Right_Arrow") || keyDown("d")) {
          player.velocityX = Math.round(displayWidth / 200);
          player.mirrorX(1);
  
          if (playAnimation == 0) {
            player.addAnimation("Player", playerRun);
            playAnimation = playAnimation + 1;
          }
  
      } else if (keyDown("Left_Arrow") || keyDown("a")) {
          player.velocityX = Math.round(displayWidth / -200);
          player.mirrorX(-1);

          if (playAnimation == 0) {
            player.addAnimation("Player", playerRun);
            playAnimation = playAnimation + 1;
          }
  
      } else {
          player.velocityX = 0;
          if (jumping == 1) {
            player.addImage("Player", playerIdle);
          }
          playAnimation = 0;
      }
  
      //Jumping
      if (InAir == 0) {
          if (keyWentDown("Up_Arrow")  || keyWentDown("w") || keyWentDown("space")) {
            player.velocityY = Math.round(displayHeight / -75);
            InAir = 1;
            jumping = 1;
            player.addImage("Player", playerJump);
          }
        }
        
      //In Air Detector
      if (InAir == 1) {
        jumping = jumping - displayHeight / 1800 / 16.25;
        if (jumping <= 0) {
          InAir = 0;
          jumping = 1;
          if (player.velocityX == Math.round(displayWidth / 200)) {
            player.addAnimation("Player", playerRun);
            playAnimation = playAnimation + 1;
            player.mirrorX(1);

          } else if (player.velocityX == Math.round(displayWidth / -200)) {
            player.addAnimation("Player", playerRun);
            playAnimation = playAnimation + 1;
            player.mirrorX(-1);
            
          }
        }
      }
}  

function Attack() {
    var rand = Math.round(random(1,4));

    if (frameCount % 7.5 === 0) {
      if (mana < 100) {
        mana = mana + 1;
      }
    }

    if (mana >= 100) {
      mana = 100;
    }

    if (mana <= 0) {
      mana = 0;
    }

    if (shoot == false) {
      shootTimer = shootTimer - 5;
    }

    if (mana >= 5) {
      if (shootTimer <= 0) {
        if (mouseWentDown("leftButton") || touches.lenght > 0) {
            mana = mana - 5;
            shoot = false;
            shootTimer = 100;
            switch(rand) {
                case 1: Bullet1();
                        break;
                case 2: Bullet2();
                        break;
                case 3: Bullet3();
                        break;
                case 4: Bullet4();
                        break;
                default: break;
            }

            touches = [];

            if (detectFriend == true) {
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
            //Bullet1();
        }
      }
    }
}