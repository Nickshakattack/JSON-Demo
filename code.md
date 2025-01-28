This is the code that I used, however I am a little confused as to what you are asking: 


let weatherJSON;

function preload() {
  let url = "https://api.weather.gov/gridpoints/OKX/33,37/forecast";
  weatherJSON = loadJSON(url);
}

function setup() {
  createCanvas(800, 400);
  noLoop(); 
}

function draw() {
  background(220);
  textAlign(CENTER);
  fill(0);

  if (weatherJSON && weatherJSON.properties) {
    let periods = weatherJSON.properties.periods;
    textSize(20);
    text("Weather Forecast Visualization", width / 2, 30);
    stroke(0);
    line(50, 350, 750, 350); 
    line(50, 50, 50, 350); 
    textSize(12);
    text("Days", width / 2, 380);
    text("Temperature (°F)", 20, height / 2);
    let maxDays = min(periods.length, 7); 
    let barWidth = (700 / maxDays);
    for (let i = 0; i < maxDays; i++) {
      let day = periods[i];
      let temp = day.temperature;
      let windSpeed = parseInt(day.windSpeed);
      fill(150, 100, 250);
      let tempHeight = map(temp, 0, 100, 0, 300);
      rect(50 + i * barWidth, 350 - tempHeight, barWidth / 2, tempHeight);
      fill(250, 100, 100);
      let windHeight = map(windSpeed, 0, 50, 0, 300);
      rect(50 + i * barWidth + barWidth / 2, 350 - windHeight, barWidth / 2, windHeight);
      text(day.name, 50 + i * barWidth + barWidth / 2, 365);
    }

  fill(0);
    textSize(14);
    text("Blue: Temperature | Red: Wind Speed", width / 2, 390);
  } else {
    textSize(16);
    text("Loading weather data...", width / 2, height / 2);
  }
}
