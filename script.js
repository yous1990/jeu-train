var vitesse=200;
var positionTrain = 0;
var btnstop = document.getElementById("btnstopper").addEventListener("click",stopperTrain);
var leTrain =document.getElementById("train").addEventListener("click",accelerTrain);
var animation;
 function accelererTrain(){
    if (vitesse>10){
      vitesse -=10;
    }
animation=setInterval(frame,vitesse);
clearInterval(animation);
 }

function frame (){
  position train += 2;
  leTrain.style.left=positionTrain+'px';
  consolelog(positionTrain);
  testerPosition(positionTrain);
}
function testerPosition(posActuelle){
  if (posActuelle== 260){
    alert('booom!');
    clearInterval(animation);
  }
}
function stopperTrain(){
  if (positionTrain<260){
    clearInterval(animation);
    alert('bravo');
  }
}
