// Variable Initialization: Tracks the movement (sandy) and mental state (apathy)
var sandy = 0;
var apathy = 0;

// Canvas Setup: Creates the 700x600 pixel drawing area
function setup() {
  createCanvas(700, 600);
}

// Drawing Loop: Refreshes 60 times per second to animate the scene
function draw() {
  background(204, 204, 204);

  // 1. Brain Visualization: Transitions from Pink to Dark as apathy grows
  let r = lerp(255, 40, apathy);
  let g = lerp(180, 40, apathy);
  let b = lerp(200, 40, apathy);
  fill(r, g, b);
  stroke(250, 250, 250, 255 * (1 - apathy)); // Border fades as brain darkens
  strokeWeight(4);
  ellipse(335, 150, 150, 110);
  ellipse(415, 150, 150, 110);

  // 2. Neural Pathway Logic: Sparks blink erratically and shut off at low battery
  // Threshold: If apathy is below 0.7, sparks flicker; above 0.7, they stay OFF.
  if (apathy < 0.7 && random(1) > apathy + 0.1) {
    fill(0, 255, 255);
    noStroke();
    rect(320 + random(0, 100), 130 + random(0, 40), 35, 6);
    rect(385 + random(-40, 20), 140 + random(-25, 25), 4, 25);
  }

  // 3. Physical Structure: Draws the spine connecting the brain to the cell
  stroke(255, 255, 255);
  strokeWeight(10);
  line(375, 195, 375, 392 + sandy);

  // 4. Energy Cell: The battery shell that holds the power level
  stroke(255, 255, 255);
  strokeWeight(3);
  noFill();
  rect(355, 400 + sandy, 40, 70); // Battery Shell
  rect(370, 392 + sandy, 10, 8);  // Battery Tip

  // 5. Energy Level: The green bar that shrinks as apathy increases
  fill(0, 255, 0, 255 * (1 - apathy)); // Color fades out completely at the end
  noStroke();
  rect(358, 403 + sandy + (64 * apathy), 34, 64 * (1 - apathy));

  // 6. Interactive Text: Reactive header that changes color based on mouse position
  fill(150, mouseX, mouseY);
  stroke(0);
  strokeWeight(3);
  textFont('Impact');
  textSize(60);
  textAlign(CENTER);
  text('Brain Experiencing Apathy', width / 2, 80);

  // 7. Custom Cursor: Follows the mouse position
  strokeWeight(0);
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);
}

// Interaction Logic: Updates the values every time the user clicks
function mousePressed() {
  apathy += 0.05; // Increases mental shutdown state

  // Reset Condition: If the battery is pushed down enough, everything resets to start
  if (sandy >= 120) {
    sandy = 0;
    apathy = 0; 
  } else {
    sandy = sandy + 8; // Pushes the battery down physically
  }
}
