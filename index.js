let start_Button = document.querySelector(".start-play")
let emptyDiv=document.querySelector(".empty-div")
let allCard = document.querySelectorAll(".img-gm");
let arrOfCard = [];
let wrongTries = document.querySelector(".tries span");
let shuffContainer = document.querySelector(".container-img-gm")
let shuffArr = Array.from(allCard);
let triesNum = 0;
wrongTries.textContent = triesNum;


start_Button.onclick = function () {
    start_Button.remove();
    emptyDiv.style.display = "none";
    for (let i = 0; i < shuffArr.length; i++){
    let J = Math.trunc(Math.random() * (i + 1));
    [shuffArr[i],shuffArr[J]]= [shuffArr[J],shuffArr[i]]
    }
    shuffContainer.innerHTML = "";
    shuffArr.forEach((ele) => {
        shuffContainer.appendChild(ele);
    })
}


allCard.forEach((ele) => {
    
    ele.addEventListener("click", function (e) {
        allCard.forEach((ele)=>ele.classList.remove("def-flip"))
        
        e.currentTarget.classList.add("flip-card");
        arrOfCard.push(e.currentTarget);
        ele.classList.c
        
        let arrReduce = arrOfCard.reduce((acc, curr) => {
            if (arrOfCard.length < 2) {
            arrReduce = false; 
            }
            if (acc.dataset.game === curr.dataset.game) {
                curr.classList.remove("flip-card");
                acc.classList.remove("flip-card");
                curr.classList.add("match-card");
                acc.classList.add("match-card");
            } else if(acc.dataset.game !== curr.dataset.game) {
                wrongTries.textContent++;
                setTimeout(() => {
                    curr.classList.remove("flip-card");
                    acc.classList.remove("flip-card");
                }, 500);
                
                
            }
                
        })
        if (arrOfCard.length === 2) {
            arrOfCard = [];
        }
    })
})