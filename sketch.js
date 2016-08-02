//ADAPTED FROM PROCESSING.ORG (https://processing.org/examples/clock.html)
var clockShape = [];
function setup() {
  
  var clock = createCanvas(800, 800);
  clock.className = "circle";
  stroke(255);
  
  radius = min(width, height) / 2;
  secondsRadius = radius * 0.72;
  minutesRadius = radius * 0.60;
  hoursRadius = radius * 0.50;
  clockDiameter = radius * 1.6;
  
  cx = width / 2;
  cy = height / 2;

///////DIV NAME (I.E. DIV10) CORRESPONDS TO//////////////////
///////THE HOUR IT REPRESENTS ON THE CLOCK////////////////// 

  var div6 = createDiv('');
  div6.id='spot7';
  // div6.style('background-color','black');
  div6.position(1180,614);

  var div7 = createDiv('');
  div7.id='spot6';
  // div7.style('background-color','black');
  div7.position(1036.00000000000006, 576.415316289918);

  var div8 = createDiv('');
  div8.id='spot5';
  div8.class='spots';
  // div8.style('background-color','black');
  div8.position(930.58468371008166, 470);

  var div9 = createDiv('');
  div9.id='spot4';
  // div9.style('background-color','black');
  div9.position(892, 326.00000000000006);

  var div10 = createDiv('');
  div10.id='spot3';
  // div10.style('background-color','black');
  div10.position(930.5846837100817, 182.99999999999997);

  var div11 = createDiv('');
  div11.id='spot2';
  // div11.style('background-color','black');
  div11.position(1035.9999999999999, 76.58468371008175);

  var div12 = createDiv('');
  div12.id='spot1';
  // div12.style('background-color','black');
  div12.position(1179.99999999999994,38);
}

function draw() {
  // background(0);
  
  // Draw the clock background
  // colorMode(HSB, 255);
  // c = color(0, 10, 180);
  // fill(c);
  // noFill(220, 220, 220, 50);
  noFill();
  clear();
  stroke(255);
  ellipse(cx, cy, clockDiameter, clockDiameter);
  
  // Angles for sin() and cos() start at 3 o'clock;
  // subtract HALF_PI to make them start at the top
  s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  m = map(minute() + norm(second(), 0, 60), 0, 60, 0, TWO_PI) - HALF_PI; 
  h = map(hour() + norm(minute(), 0, 60), 0, 24, 0, TWO_PI * 2) - HALF_PI;
  
  // Draw the hands of the clock
  stroke(255);
  strokeWeight(1);
  line(cx, cy, cx + cos(s) * secondsRadius, cy + sin(s) * secondsRadius);
  strokeWeight(2);
  line(cx, cy, cx + cos(m) * minutesRadius, cy + sin(m) * minutesRadius);
  strokeWeight(4);
  line(cx, cy, cx + cos(h) * hoursRadius, cy + sin(h) * hoursRadius);
  
  // Draw the minute ticks
  fill('red');
  noStroke();
  // stroke('rgb(100%,0%,10%)');
  // strokeWeight(0);

  var clock6 = ellipse (400,688,20,20);
  var clock7 = ellipse (256.00000000000006, 649.415316289918,20,20);
  var clock8 = ellipse (150.58468371008166, 544,20,20);
  var clock11 = ellipse (255.9999999999999, 150.58468371008175,20,20);
  var clock12 = ellipse (399.99999999999994,112,20,20);
  var clock9 = ellipse (112, 400.00000000000006,20,20);
  var clock10 = ellipse (150.5846837100817, 255.99999999999997,20,20);

}
