video= "";
status="";
objects= [];

function preload(){

}
function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status :- Detecting objects";
  }
  
function setup(){
  canvas=createCanvas(480,380);
  canvas.center(); 
  video= createCapture(VIDEO);
 video.size(480,380);
 video.hide();
}
function draw(){
  image(video, 0,0,480,380); 
  if(status != "") {
      r=random(255);
      g=random(255);
      b=random(255);
      objectDetector.detect(video, gotResult);
      for(i =0; i< object.length; i++)
      {
        
        fill(r,g,b);
        percent= floor(object[i].confidence*100);
        text(object[i].label + "    " + percent + "%", object[i].x, object[i].y - 5);
        noFill();
        stroke(r,g,b);
        rect(object[i].x , object[i].y, object[i].width, object[i].height);
        if(objects[i].label == input){
 video.stop();
 objectDetector.detect(gotResult);
 document.getElementById("status").innerHTML = input + " Found";
 utterThis= new SpeechSynthesisUtterance("Objects mentioned found");
 synth.speak(utterThis);     
}
      }
                  }
                  else{
                  document.getElementById("status").innerHTML= "Object not Found";
                  }
                } 
function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML= "Status:- Detecting Objects";
    document.getElementById('input').value;
}

  function gotResult(error, results){
    if(error){
      console.log(error);
    }
    else{
    console.log(results);
    object= results;
    }
  }

function modelLoaded(){
    console.log('Model is Loaded- Devyansh');
    status= true;
} 
function gotResult(results,error){
 if(error){
  console.log(error);
 }
 console.log(results);
 objects= results;
}