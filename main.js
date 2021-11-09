img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
  img = loadImage("mario05.png");
}

function setup() {
  createCanvas(650, 400);
  video = createCapture(VIDEO);
  video.size(600,300);
  
  posenet = ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses);
}

function modelLoaded(){
  console.log("I dont care posnet has been neutralized!! ");
}

function gotPoses(results){
  if (results.length > 0){
   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y;
   console.log( "X pos of nose = " + noseX  + "Y pos of nose =" + noseY);
  }
}

function draw() {
  background("#D3D3D3");
  
if(noseX > 300){
   marioX = marioX + 1;
  }
  
  
  if(noseX < 300){
   marioX = marioX - 1;
  }
  
  
  if(noseY < 150){
   marioY = marioY - 1;
  }
  
   if(noseY > 150){
   marioY = marioY + 1;
  }
  
  image(img,marioX, marioY, 40,70);
}


