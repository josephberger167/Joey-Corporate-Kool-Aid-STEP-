var sandy= 0;
var apathy= 0;
function setup() {
	 createCanvas(700, 600);
}

function draw() {
background(204, 204,204); 

 // 1. THE BRAIN (Pink to Dark)
  let r = lerp(255, 40, apathy); // 255 is pink-ish start, 40 is dark end
  let g = lerp(180, 40, apathy);
  let b = lerp(200, 40, apathy);
  fill(r, g, b); 
  stroke(250, 250, 250, 255 * (1 - apathy));
  strokeWeight(4);
  ellipse(335, 150, 150, 110); 
  ellipse(415, 150, 150, 110);
  
  // 2. THE CORTEX (Neural Sparks Inside Brain) --
  if (random(1) > apathy) {
    fill(0, 255, 255);
    noStroke();
    rect(320 + random(0,100), 130 + random(0, 40),35,6);
    rect(385 + random(-40, 20), 140 + random(-25, 25), 4, 25);
    }

 // --- 3. THE SPINE
  stroke(255,255, 255);
  strokeWeight(10)
  line(375, 195, 375, 392 + sandy); 
 
// --- 4. THE POWER CELL ---
  stroke(255, 255, 255); // White border
  strokeWeight(3);
  noFill();
  // The battery "shell"
  rect(355, 400 + sandy, 40, 70); // Shell
  // The battery "tip"
  rect(370, 392 + sandy, 10, 8); // Tip

  // THE POWER LEVEL (Drains as apathy grows)
  fill(0, 255, 0, 255 * (1 - apathy)); // Green energy that fades out
  noStroke();
  // This rectangle "shrinks" inside the shell
  rect(358, 403+ sandy + (64 * apathy), 34, 64 * (1 - apathy));

  // --- 5. TEXT ---
  fill(150, mouseX, mouseY); 
  stroke(0); 
  strokeWeight(3); 
  textFont('Impact'); // text black border outline
  textSize(60);
  textAlign(CENTER);
  text('Brain Experiencing Apathy', width/2, 80);
  
 // -- 6. CURSOR -
  strokeWeight(0);
  fill(255);
  ellipse(mouseX, mouseY, 20, 20);
}


function mousePressed(){
    apathy += 0.05;
    
    if (sandy >= 120) {
      sandy=0;
      apathy =0;// Resets the brain to pink
    } else {
      sandy=sandy+8;
    }
  }

