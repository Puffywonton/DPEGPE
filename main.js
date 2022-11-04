import './styles/style.css'
import { dpe } from './dpe'
import { ges } from './ges'
import cepEges from './cepEges'
import { params } from './params'
import { screenshot } from './screenshot'
import DepGes from './DepGes'

document.querySelector('#app').innerHTML = `
    <div id="params" class="params">
        <div class="values-container">
            <div class="dpe-container">
                <span>valeur dpe</span>
                <input type="text" placeholder="12" id="dpeInput"></input>
            </div>
            <div class="ges-container">
                <span>valeur ges</span>
                <input type="text" placeholder="50" id="gesInput"></input>
            </div>
        </div>
        <button id="createButton" class="create">create</button>
        <div>
            <span>SCREENSHOT</span>
            <button id="screenshotButton">CLICK</button>
        </div>
    </div>
    <div id="cepeges" class="cepeges"></div>
    <div id="DepGes" class="depges"></div>
`

// dpe('dpe', 92)
// ges('ges', 40)
// params()
// screenshot()
DepGes("DepGes", 400, 300)
// cepEges("cepeges")
// barBuilder("dpe") 