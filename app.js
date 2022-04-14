var counter=0;
var interval=500;
var i=0;
var level=1;

let timer;

function changePos()
{
   var button = document.getElementById('button');
   var rand=Math.random()*500;
   button.style.marginTop=Math.random()*500+"px";
   button.style.marginLeft=Math.random()*500+"px";
   
}



function start() {
   
   clearInterval(timer);

   if(counter>=3)
   {
       alert('Congratulations. You completed this level');
       counter=0
       level++;
       interval-=100;
   }
   document.getElementById('counter').innerHTML="True Click="+counter;
   document.getElementById('level').innerHTML="Level="+level;
   timer=setInterval(() => {
       changePos()
   }, interval);
   
    counter++;
}