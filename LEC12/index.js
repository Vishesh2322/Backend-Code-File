let box =document.querySelector(".box");
let genbtn=document.querySelector(".btn");
let stopbtn =document.querySelector(".stop");

let colors =["red" ,"black" , "blue" ,"orange","brown" ,"yellow", "purple" ,"pink" , "grey"]
let intervalid=null
function  randomcolor(){
     let index = Math.floor(Math.random()*10);
     let color =colors[index];
     return color
}
genbtn.addEventListener("click",function(){
    intervalid=setInterval(()=>{
        let color=randomcolor()
        box.style.background=color;
    },500)
})
stopbtn.addEventListener("click" ,function(){
   if(intervalid){
    clearInterval(intervalid)
   }
})