import "./scss/dpeGes.scss"
import dpeGesData from "./dpeGesData"

const isFocusChecker = (dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax ) => {
    if (((dpeValue >= dpeMin && dpeValue <= dpeMax) && gesValue <= gesMax) || ((gesValue >= gesMin && gesValue <= gesMax) && dpeValue <= gesMax)) {
        return(true)
    } 
}

const barLetterBuilder = (letter, classList, size) => {
    let barLetter = document.createElement("span")
    barLetter.innerHTML = letter
    // barLetter.classList.add(classList);
    // barLetter.style.fontSize = size + "px"
    barLetter.style.fontSize = "10vw"
    return(barLetter)
}

const barsGenerator = (dpeValue, gesValue) => {
    const datas = dpeGesData()
    let barBaseWidthIncrementor = 10
    let barBaseWidthSize = 15
    let barsContainer = document.createElement("div")
    barsContainer.classList.add("dpeGes-barsContainer")
    for (let data of datas) {
        barsContainer.append(barBuilder(
            barBaseWidthSize,
            data.color,
            dpeValue,
            data.cepMin,
            data.cepMax,
            gesValue,
            data.egesMin,
            data.egesMax,
            data.letter,
            ))
        console.log(data.color, barBaseWidthSize)
        barBaseWidthSize = barBaseWidthSize + barBaseWidthIncrementor;
    }
    return(barsContainer)
}

const barBuilder = (barBaseWidthSize, barColor, dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax, letter) => {
    let barContainer = document.createElement("div")
    barContainer.classList.add("dpeGes-barContainer")
    let barArrowContainer = document.createElement("div")
    barArrowContainer.classList.add("dpeGes-barArrowContainer")
    let barBase = document.createElement("div")
    barBase.classList.add("dpeGes-barBase")
    barArrowContainer.appendChild(barBase)
    let barTipContainer = document.createElement("div")
    barTipContainer.classList.add("dpeGes-barTipContainer")
    let barTip = document.createElement("div")
    barTip.classList.add("dpeGes-barTip")  
    barBase.style.backgroundColor = barColor
    barTip.style.backgroundColor = barColor
    barBase.appendChild(barLetterBuilder(letter))
    if (isFocusChecker(dpeValue, dpeMin, dpeMax, gesValue, gesMin, gesMax)) {
        console.log("it is this one", letter)
        barContainer.style.height = "18%"
        barTipContainer.style.width = "36%"
        barBase.style.width = (barBaseWidthSize - 10) + "%"
        let focusLegendContainer = document.createElement("div")
        focusLegendContainer.style.width = "45%"
        focusLegendContainer.style.backgroundColor = barColor
        focusLegendContainer.style.borderRight = "1px solid"
        barContainer.appendChild(focusLegendContainer)
    } else {
        barBase.style.width = barBaseWidthSize + "%"
        barContainer.style.height = "12%"
        barTipContainer.style.width = "24%"
    }
    barTipContainer.appendChild(barTip)
    barArrowContainer.appendChild(barTipContainer)
    barContainer.appendChild(barArrowContainer)
    return(barContainer)
}


const dpeGesv2 = ({containerId: containerId, dpeValue: dpeValue, gesValue: gesValue, }) => {
    let containerElement = document.getElementById(containerId)
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("dpeGes-main-container")
    mainContainer.appendChild(barsGenerator(dpeValue, gesValue))
    containerElement.appendChild(mainContainer)
}

export default dpeGesv2