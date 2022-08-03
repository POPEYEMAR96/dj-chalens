noseY=0;
noseX=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() 
{
  video = createCapture(VIDEO);
  video.size(550, 500);
 
  canvas = createCanvas(500, 500);
  canvas.position(560,150);
 
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
 
function modelLoaded()
{
  console.log('¡PoseNet está inicializado!');
}
 
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);


  }
}
 
function draw()
{
    background("#C2D3DF")

  document.getElementById("square_side").innerHTML=
  "El ancho y altura del cuadrado será = "+difference +"px";
  fill('#F90093');
  stroke('#F90093');
  square(noseX, noseY, difference);
 }