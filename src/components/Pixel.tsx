import React, { useState } from 'react'

type pixeltype = {
    selectedColor: string;
    isMouseDown: boolean;
    onMouseDown: (e: React.MouseEvent) => void;
    onMouseUp: () => void;
}

export default function Pixel(props: pixeltype) {
    const { selectedColor, isMouseDown, onMouseDown, onMouseUp } = props;
    const [pixelColor, setPixelColor] = useState("#fff");
    const [oldColor, setOldColor] = useState(pixelColor);
    const [changeColor, setChangeColor] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isRightMouseDown, setIsRightMouseDown] = useState(false);

    const applyColor = () => {
        if (changeColor) {
            setPixelColor(selectedColor);
            setOldColor(selectedColor);
            setChangeColor(false);
        }
    }

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Previene el menú contextual
        setPixelColor("#fff");
        setOldColor("#fff");
        setChangeColor(false);
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button === 2) { // Clic derecho
            setIsRightMouseDown(true);
            setPixelColor("#fff");
            setOldColor("#fff");
            setChangeColor(false);
        } else {
            onMouseDown(e);
        }
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        if (e.button === 2) {
            setIsRightMouseDown(false);
        } else {
            onMouseUp();
        }
    }

    const changeColorOnHover = () => {
        setIsHovered(true);
        if (isRightMouseDown) {
            setPixelColor("#fff");
            setOldColor("#fff");
            setChangeColor(false);
        } else if (!isMouseDown) {
            setOldColor(pixelColor);
            setPixelColor(selectedColor);
        } else {
            setPixelColor(selectedColor);
            setOldColor(selectedColor);
            setChangeColor(false);
        }
    }

    const resetColor = () => {
        setIsHovered(false);
        if (!isMouseDown && !isRightMouseDown) {
            setPixelColor(oldColor);
            setChangeColor(true);
        }
    }

    return (
        <div
            className='pixel'
            style={{ backgroundColor: pixelColor }}
            onClick={applyColor}
            onContextMenu={handleRightClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={changeColorOnHover}
            onMouseLeave={resetColor}
        />
    )
}
