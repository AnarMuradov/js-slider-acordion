const imagesArea=document.querySelector(".container")

const right=document.querySelector(".fa-arrow-right")
const left=document.querySelector(".fa-arrow-left")
right.addEventListener("click",function mf(){
   let index2= document.querySelector(".index2")
   index2.classList.remove("index2")
   if(index2.nextElementSibling!==null){
    index2.nextElementSibling.classList.add("index2")    
   }
   else{
    imagesArea.firstElementChild.classList.add("index2")
   }
        
    

   
})
left.addEventListener("click",function mf1(){
    let index2= document.querySelector(".index2")
    if(index2.previousElementSibling!==null){
        index2.classList.remove("index2")
        index2.previousElementSibling.classList.add("index2")    
    }
    else{
     imagesArea.lastElementChild.classList.add("index2")
    }
 
 })