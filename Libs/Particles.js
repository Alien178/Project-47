class Particle {
    constructor() {
      this.x = friend1.x;
      this.y = friend1.y;
      this.vx = random(-1, 1);
      this.vy = random(-5, -1);
      this.alpha = 255;
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    updateOne() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 10;
    }

    updateTwo() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 20;
    }


  
    show() {
      noStroke();
      fill(this.alpha);
      ellipse(this.x, this.y, 16);
    }
  
}