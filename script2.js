const info = document.querySelectorAll(".info")
const head = document.querySelectorAll(".head")


for (let i = 0; i < head.length; i++) {
    head[i].addEventListener("click",function mf(){
        info[i].classList.toggle("info1")
    }
    )
}



