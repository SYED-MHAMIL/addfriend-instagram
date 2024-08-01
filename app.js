
let head= document.querySelector("h2");
let btn=document.querySelector(".btn")


let  isbtn=true

btn.addEventListener("click", ()=>{
 if(isbtn){
    head.innerHTML="Friends"
    head.style.color="green"
btn.innerHTML="Remove Friend"
isbtn=false
 }else{
      head.innerHTML="stranger"
      head.style.color="red"
  btn.innerHTML="add Friend"  ;
  isbtn=true;
 }
         


})

