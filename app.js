var min=0;
var sec=0;
var msec=0;

var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;

function timer(){
    msec++;
msecHeading.innerHTML=msec;

if(msec >= 100){
sec++;
secHeading.innerHTML=sec;
msec=0; 
}
else if(sec>=5){
min++;
minHeading.innerHTML=min;
sec=0;
}

}



function start(){
    interval=setInterval(timer,10);
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    
}

function pause(){
    clearInterval(interval)
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = false;
    
}

function reset(){
 min=0;
 sec=0;
msec=0;
minHeading.innerHTML=min;
secHeading.innerHTML=sec;
msecHeading.innerHTML=msec;
    pause();
    document.getElementById("btn3").disabled = true;

}