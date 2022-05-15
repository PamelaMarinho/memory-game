const CARD = document.getElementsByClassName("card")
const LIST = [1,1,2,2,3,3,4,4,5,5,6,6]
const SHUFFLED_LIST = LIST.sort( ()=> Math.random() - 0.5 )

document.getElementsByTagName("body")[0].addEventListener('reload', setImage(), timer())

function setImage(){
    const CARD = document.getElementsByClassName("back")
    for ( i in CARD){
        const IMG = SHUFFLED_LIST.length > 1 ? SHUFFLED_LIST.pop() : SHUFFLED_LIST[0]
        CARD[i].src = `./image/back${IMG}.png`
}}

for ( i in CARD ){
    CARD[i].addEventListener("click", (e)=>{
        const CLASSE_BACK = e.target.offsetParent.className
        document.getElementsByClassName(CLASSE_BACK)[0].style.transform = "rotateY(180deg)";
    })
}

function timer(){
    let count = 0
    const MY_INTERVAL = setInterval( ()=>{
        count += 1
        document.getElementsByClassName("timer")[0].innerHTML =  10 - count
        if (count == '2'){
            clearInterval(MY_INTERVAL)
            const CARD = document.getElementsByClassName("card")
            for ( i in CARD){
                CARD[i].style.transform = "rotateY(180deg)"
            }
        }
},1000)
}

