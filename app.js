const app = document.getElementById('app')
const button = document.getElementById('button')
const colorName = document.getElementById('colorName')

const colors = ['Red','Yellow','Blue','Green','Purple','Brown','White','Orange','Gray','Skyblue']
const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let hexStr = ["#"]
let oldColor = null

colorName.innerHTML = colorName.innerHTML.toUpperCase()
    
button.addEventListener("click",() => {
    
    if(!oldColor) {
        button.style.background = "white"
        colorName.style.color = "white"
    } else {
        button.style.background = oldColor
        colorName.style.color = oldColor
    }

    hexStr.length = 1
    while(hexStr.length <= 6 ){
        hexStr.push(hex[Math.floor(Math.random() * hex.length)])
    }    
    app.style.background = hexStr.join('')
    let cName = ntc.name(hexStr.join(''));
    oldColor = hexStr.join('')
    colorName.innerHTML = cName[1].toUpperCase()
    
})