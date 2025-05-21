import React, { useState } from 'react'
import { CompactPicker, type ColorResult } from 'react-color'
import DrawingPanel from './DrawingPanel';

export default function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("Start Drawing");
    const [selectedColor, setSelectedColor] = useState("$f44336");

    const initializeDrawingPannel = () => {
        setHideDrawingPanel(!hideDrawingPanel)
        setHideOptions(!hideOptions)
        if (buttonText === "Start Drawing") {
            setButtonText("Reset")
        } else {
            setButtonText("Start Drawing")
        }
    }
    const changeColor = (color: ColorResult) => {
        setSelectedColor(color.hex)
    }

    return (
        <div id='editor' >
            <h1>
                Pixel Editor
            </h1>
            {hideDrawingPanel && <><h2>Enter Panel Dimensions</h2> </>}
            {hideDrawingPanel && (<div id='options'>
                <div className='option'>
                    <input type="number" className='panelInput' defaultValue={panelWidth} max={64} onChange={(e) => { if (Number(e.target.value) > 64) e.target.value = "64"; setPanelWidth(Number(e.target.value)) }} />
                    <span>Width</span>

                </div>

                <div className='option'>
                    <input type="number" className='panelInput' defaultValue={panelHeight} max={64} onChange={(e) => { if (Number(e.target.value) > 64) e.target.value = "64"; setPanelHeight(Number(e.target.value)) }} />
                    <span>Height</span>
                </div>
            </div>)
            }
            <span>(max 64x64)</span>
            <button className='button' onClick={initializeDrawingPannel}>
                {buttonText}
            </button>
            {hideOptions && (
                <>
                    <CompactPicker color={selectedColor} onChangeComplete={changeColor} />
                    <DrawingPanel width={panelWidth} height={panelHeight} selectedColor={selectedColor} />
                </>
            )}
        </div >
    )
}
