var player, playerRun, playerIdle, playerJump;
var friend1, friendSprite;
var ground;
var InAir = 0;
var jumping =  1;
var playAnimation = 0;
var bulletGroup, bulletGroup2, bulletGroup3, bulletGroup4, bulletSprite;
var friendBulletGroup, friendBulletGroup2, friendBulletGroup3, friendBulletGroup4, friendBulletSprite;
var mana = 100;
var health = 100;
var shootTimer = 0;
var shoot = true;
var font, font1;
var backgroundImg;
var mouse, mouseImg, mouseImg2;
var friendHealth = 100;
var detectFriend = false;
var timer = 100;
var followPlayer = false;
const particles = [];
var DebugKillFriend;
var value, valueY;
var level = 1;
var gameState = "START";
var playButton, playButtonS;
var pauseButton, pauseButtonS;
var portalKey, portalKeyS;

function preload() {
  playerRun = loadAnimation("Player/run/run_1.png", "Player/run/run_2.png", "Player/run/run_3.png", "Player/run/run_4.png");
  playerIdle = loadImage("Player/idle/idle_1.png");
  playerJump = loadImage("Player/jump/jump_2.png");
  bulletSprite = loadImage("images/fireball.png");
  font = loadFont("Fonts/inverted.ttf");
  //font1 = loadFont("Fonts/lightpixel7.ttf");
  font1 = loadFont("Fonts/inverted3.otf");
  font2 = loadFont("Fonts/inverted4.ttf");
  backgroundImg = loadImage("images/background1.png");
  friendSprite = loadAnimation("Enemy/B Flame 1.png", "Enemy/B Flame 2.png", "Enemy/B Flame 3.png", "Enemy/B Flame 4.png", "Enemy/B Flame 5.png", "Enemy/B Flame 6.png", "Enemy/B Flame 7.png", "Enemy/B Flame 8.png", "Enemy/B Flame 9.png", "Enemy/B Flame 10.png", "Enemy/B Flame 11.png", "Enemy/B Flame 12.png");
  friendBulletSprite = loadImage("images/fireball2.png");
  mouseImg = loadImage("images/cursorOne.png");
  mouseImg2 = loadImage("images/cursorTwo.png");
  playButtonS = loadImage("buttons/play.png");
  pauseButtonS = loadImage("buttons/pause.png");
  portalKeyS = loadImage("images/Key.png");
}

function setup() {
  //createCanvas(displayWidth, displayHeight - 105);
  canvas = createCanvas(windowWidth, windowHeight);
  
  player = createSprite(1000000, 1000000);
  player.addImage("Player", playerIdle);
  player.scale = (windowWidth + windowHeight) / 5000;
  player.setCollider("rectangle", 0, 22, 275, 355);

  DebugKillFriend = createSprite(windowWidth / 24, windowHeight / 5.5);

  ground = createSprite(1000000000, 1000000000, windowWidth + 10, 50);

  friend1 = createSprite(1000000, 1000000);
  friend1.addAnimation("friend", friendSprite);
  friend1.scale = (windowWidth + windowHeight) / 10000;
  friend1.setCollider("circle", 0, 15, 150);

  portalKey = createSprite(1000000, 1000000);
  portalKey.addImage("portalKey", portalKeyS);
  portalKey.scale = (windowWidth + windowHeight) / 15000;
  //portalKey.debug = true;
  portalKey.setCollider("circle", 0, 0);
  portalKey.visible = false;
  
  bulletGroup = createGroup();
  bulletGroup2 = createGroup();
  bulletGroup3 = createGroup();
  bulletGroup4 = createGroup();
  friendBulletGroup = createGroup();
  friendBulletGroup2 = createGroup();
  friendBulletGroup3 = createGroup();
  friendBulletGroup4 = createGroup();

  playButton = createSprite(10000, 10000);
  playButton.addImage("Play", playButtonS);
  playButton.scale = (windowWidth + windowHeight) / 4000;
  playButton.setCollider("circle", 0, -2.25);
  //playButton.debug = true;

  pauseButton = createSprite(windowWidth / 1.075, windowHeight / 8);
  pauseButton.addImage("Pause", pauseButtonS);
  pauseButton.scale = (windowWidth + windowHeight) / 7250;
  // pauseButton.debug = true;
  pauseButton.setCollider("circle", 0, 0);
  //pauseButton.visible = false;

  mouse = createSprite(mouseX, mouseY);
  mouse.addImage("mouse", mouseImg);
  mouse.scale = (windowWidth + windowHeight) / 15000;
  mouse.rotation = 20;

  Hide();
}

function draw() {
  background(backgroundImg);

  if (gameState == "START") {
    StartMenu();
    mouse.x = mouseX + 5.25;
    mouse.y = mouseY + 20;
    cursor("none");
    MouseOver();
  }

  if (gameState == "PLAY") {
    //showCursor();
    cursor("crosshair");
    mouse.visible = false;
    PlayMenu();
    detect();
    playerMove();
    Attack();
    Words();
    
    bulletDestroy();
    ParticleRun();
    MouseOver();
    LevelFinish();


    if (level == 2) {
      FriendShoot();
    }

    if (detectFriend == true) {
      if (followPlayer == true) {
        FollowPlayer();
      }
    }
  }

  if (gameState == "PAUSE") {
    PauseMenu();
    MouseOver();
    mouse.x = mouseX + 5.25;
    mouse.y = mouseY + 20;
    cursor("none");
    mouse.visible = true;
  }
  drawSprites();

}

// function touchStarted(event) {
//   console.log(event);
// }