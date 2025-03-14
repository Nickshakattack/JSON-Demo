NEW UPDATED CODE:
Further Class Development:




class Snowfall {
  constructor() {
    this.snowflakes = [];
  }
  
  addSnowflake(x, y, size) {
    this.snowflakes.push({ x, y, size, speed: random(1, 3) });
  }
  
  updateAndDraw() {
    fill(255);
    noStroke();
    for (let flake of this.snowflakes) {
      ellipse(flake.x, flake.y, flake.size);
      flake.y += flake.speed;
      if (flake.y > height) flake.y = 0;
    }
  }
}

class BarChart {
  constructor() {
    this.data = [];
  }
  
  addData(label, value) {
    this.data.push({ label, value });
  }
  
  drawChart() {
    background(220);
    let barWidth = width / this.data.length;
    let maxVal = max(this.data.map(d => d.value));
    
    // Draw axes
    stroke(0);
    line(50, height - 50, width - 20, height - 50); // X-axis
    line(50, height - 50, 50, 20); // Y-axis
    
    // Axis titles
    fill(0);
    textSize(18);
    textAlign(CENTER);
    text("Months (2015-2020)", width / 2, 30); // Move x-axis title above everything
    
    textSize(20);
    textAlign(CENTER);
    push();
    translate(20, height / 2);
    rotate(-HALF_PI);
    text("Snowfall (inches)", 0, 0); // Make y-axis title more visible
    pop();
    
    for (let i = 0; i < this.data.length; i++) {
      let barHeight = map(this.data[i].value, 0, maxVal, 50, height - 50);
      let x = i * barWidth + 60;
      let y = height - barHeight;
      fill(100, 150, 255);
      rect(x, y, barWidth - 20, barHeight);
      
      // Hover effect (text above the bar)
      if (mouseX > x && mouseX < x + barWidth - 20 && mouseY > y && mouseY < height - 50) {
        fill(255, 0, 0);
        textSize(16);
        textAlign(CENTER);
        text(`${this.data[i].label}: ${this.data[i].value.toFixed(1)} inches`, x + (barWidth - 20) / 2, y - 10);
      }
    }
  }
}

let chart;
let snowfall;

function setup() {
  createCanvas(600, 400);
  chart = new BarChart();
  snowfall = new Snowfall();
  
  for (let i = 0; i < 100; i++) {
    snowfall.addSnowflake(random(width), random(height), random(2, 5));
  }
  
  chart.addData("Dec 2015", 6.0);
  chart.addData("Jan 2016", 54.6);
  chart.addData("Feb 2016", 8.0); 
  chart.addData("Mar 2016", 7.4);
  chart.addData("Dec 2016", 4.1);
  chart.addData("Jan 2017", 21.8);
  chart.addData("Feb 2017", 32.5);
  chart.addData("Mar 2017", 21.4);
  chart.addData("Dec 2017", 18.7);
  chart.addData("Jan 2018", 9.9);
  chart.addData("Feb 2018", 0.0);
  chart.addData("Mar 2018", 19.4);
  chart.addData("Dec 2019", 4.1);
  chart.addData("Jan 2020", 11.5);
  chart.addData("Feb 2020", 17.4);
  chart.addData("Mar 2020", 0.0);
}

function draw() {
  background(0);
  snowfall.updateAndDraw();
  chart.drawChart();
}
