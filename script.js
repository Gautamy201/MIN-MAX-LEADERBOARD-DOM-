let buttons = document.querySelectorAll(".button")
let score = document.querySelector("#score");
let minScore = document.querySelector("#min")
let maxScore = document.querySelector("#max")
let enterBtn = document.querySelector("#enter")


let string = ""


buttons.forEach((value)=>{
    value.addEventListener('click',(e)=>{
        string += e.target.innerHTML
        score.innerHTML = string
    })
})

enterBtn.addEventListener("click",()=>{
    let curScore = Number(score.innerHTML)
    let minS = (Number(minScore.innerHTML))
    let maxS = (Number(maxScore.innerHTML))

    if(curScore<minS){
        minScore.innerHTML=curScore
    }
    else if (curScore>maxS){
        maxScore.innerHTML=curScore
    }

    string=""
    score.innerHTML=""
})


