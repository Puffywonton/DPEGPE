const DepGes = (containerId, containerHeight, containerWidth, cepValue, egesValue) => {
    const Datas = [
        {
            letter: "A",
            cepMin: 0,
            cepMax: 69, //original is 70 but I wan to use inferior equal
            egesMin: 0,
            egesMax: 5, //original 6
            color: '#329837'
        },
        {
            letter: "B",
            cepMin: 70,
            cepMax: 109, //110
            egesMin: 6,
            egesMax: 10, //11
            color: '#57af37'
        },
        {
            letter: "C",
            cepMin: 110,
            cepMax: 179, //180
            egesMin: 11,
            egesMax: 29, //30
            color: '#c6d300'
        },
        {
            letter: "D",
            cepMin: 180,
            cepMax: 249, //250
            egesMin: 30,
            egesMax: 49, //50
            color: '#f2e500'
        },
        {
            letter: "E",
            cepMin: 250,
            cepMax: 329, //330
            egesMin: 50,
            egesMax: 69, //70
            color: '#ffcb03'
        },
        {
            letter: "F",
            cepMin: 330,
            cepMax: 419, //420
            egesMin: 70,
            egesMax: 99, //100
            color: '#f39739'
        },
        {
            letter: "G",
            cepMin: 420,
            cepMax: 1000, //what is max??
            egesMin: 100,
            egesMax: 1000, //what is max ??
            color: '#e4251f'
        },
    ]
    let barsContainerProportion = 0.6

    let containerElement = document.getElementById(containerId)
    containerElement.style.height = containerHeight + "px"
    containerElement.style.width = containerWidth + "px"
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container")
    let topLegend = document.createElement("span")
    topLegend.style.width = (containerWidth * barsContainerProportion) + "px"
    topLegend.style.fontSize = containerHeight / 45 + "px"
    topLegend.classList.add("top-legend")
    topLegend.innerHTML = "logement très performant"
    mainContainer.appendChild(topLegend)
    let barsContainer = document.createElement("div");
    barsContainer.classList.add('container-bars')
    barsContainer.style.width = (containerWidth * barsContainerProportion) + "px"
    let size = 40; //40% to get 100% at the end
    for (let data of Datas) {
        let barContainer = document.createElement("div");
        barContainer.classList.add('container-bar')
        barContainer.style.width = size + "%";
        size = size + 10;
        barsContainer.append(barContainer);
        let barLetter = document.createElement("span");
        barLetter.innerHTML = data.letter;
        barLetter.classList.add('bar-letter');
        let height = 12; //percentage cannot be above 12
        let styleStroke = "stroke:none"
        if (((cepValue >= data.cepMin && cepValue <= data.cepMax) && egesValue <= data.egesMax) || ((egesValue >= data.egesMin && egesValue <= data.egesMax) && cepValue <= data.cepMax)) {
            barLetter.classList.add('bar-letter-focus');
            barContainer.style.height = height * 1.6 + "%" //can modify height of focus element here
            barContainer.style.fontSize = containerHeight / 5 + "px"
            styleStroke = "stroke:black"
            let focusInfo = document.createElement("div")
            focusInfo.classList.add("bar-info-focus")
            focusInfo.style.width = (containerWidth * (1 - barsContainerProportion))-4 + "px"
            focusInfo.style.left = "-" + ((containerWidth * (1 - barsContainerProportion))-4) + "px"
            barContainer.appendChild(focusInfo)
            let dpeInfo = document.createElement("div")
            dpeInfo.style.fontSize = containerWidth / 45 + "px"
            dpeInfo.classList.add("focus-dpe-info")
            let dpeSpan = document.createElement("span")
            dpeSpan.classList.add("span")
            dpeSpan.style.fontSize = containerHeight /13 + "px"
            dpeSpan.innerHTML = cepValue
            dpeInfo.appendChild(dpeSpan)
            let dpeLegend = document.createElement("span")
            dpeLegend.classList.add("focus-legend")
            dpeLegend.innerHTML = 
                `
                    kWh/m<sup>2</sup>.an
                `;
            dpeInfo.appendChild(dpeLegend)
            focusInfo.appendChild(dpeInfo)
            let gesInfo = document.createElement("div")
            gesInfo.style.fontSize = containerWidth / 45 + "px"
            gesInfo.classList.add("focus-ges-info")
            let gesSpan = document.createElement("span")
            gesSpan.classList.add("span")
            gesSpan.style.fontSize = containerHeight /13 + "px"
            gesSpan.innerHTML = egesValue
            gesInfo.appendChild(gesSpan)
            let gesLegend = document.createElement("span")
            gesLegend.classList.add("focus-legend")
            gesLegend.innerHTML = 
                `
                  kgCO<sub>2</sub>/m<sup>2</sup>.an  
                `;
            gesInfo.appendChild(gesLegend)
            focusInfo.appendChild(gesInfo)
        } else {
            barContainer.style.height = height + "%"
            barContainer.style.fontSize = containerHeight / 10 + "px"
            
        }
        barContainer.insertAdjacentHTML("afterbegin",  
            `
            <svg 
                width='100%' 
                height='100%' 
                viewBox="700 0 100 100" 
                style='background-color: white'
                preserveAspectRatio="xMaxYMax meet"
            >
                <path 
                    d="M1 1 L 780 1 L 797 50 L 780 99 L 1 99 Z" 
                    vector-effect="non-scaling-stroke" 
                    style="`+styleStroke+`;stroke-width:3;fill:`+data.color+`"/>
            </svg>
            `
        )
        barContainer.appendChild(barLetter);
    }
    let sideLegend = document.createElement("span")
    sideLegend.style.width = (containerWidth * (1 - barsContainerProportion) - 7) + "px"
    sideLegend.style.height = (containerHeight / 5) + "px"
    sideLegend.style.fontSize = containerHeight / 45 + "px"
    sideLegend.classList.add("side-legend")
    sideLegend.innerHTML = "passoire énergétique"
    mainContainer.appendChild(sideLegend)
    let bottomLegend = document.createElement("span")
    bottomLegend.style.width = (containerWidth * barsContainerProportion) + "px"
    bottomLegend.style.fontSize = containerHeight / 45 + "px"
    bottomLegend.classList.add("bottom-legend")
    bottomLegend.innerHTML = "logement extrêmement consommateur d'énergie"
    mainContainer.appendChild(bottomLegend)
    mainContainer.appendChild(barsContainer)
    if (containerElement.childNodes.length != 0) {
        containerElement.removeChild(containerElement.firstElementChild)
    }
    containerElement.appendChild(mainContainer)
}

export default DepGes