const CARD = document.getElementsByClassName("card")
const SHUFFLED_LIST = [1,1,2,2,3,3,4,4,5,5,6,6].sort( ()=> Math.random() - 0.5 )

document.getElementsByTagName("body")[0].addEventListener('reload', setImage(), timer())

function setImage(){
    const CARD = document.getElementsByClassName("back")
    for ( let element of CARD){
        const IMG = SHUFFLED_LIST.length > 1 ? SHUFFLED_LIST.pop() : SHUFFLED_LIST[0]
        element.src = `./image/back${IMG}.png`  
}}

for ( let element of CARD ){
    element.addEventListener("click", ()=>{
        element.style.transform = "rotateY(0deg)";
    })
}

function timer(){
    let count = 0
    const MY_INTERVAL = setInterval( ()=>{
        count += 1
        document.getElementsByClassName("timer")[0].innerHTML =  10 - count
        if (count == '10'){
            clearInterval(MY_INTERVAL)
            for ( let element of CARD ){
                element.style.transform = "rotateY(180deg)"
            }
        }
},1000)
}

