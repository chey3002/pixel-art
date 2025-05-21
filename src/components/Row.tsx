import React from 'react'
import Pixel from './Pixel'

type RowProps = {
    width: number;
    selectedColor: string;
    isMouseDown: boolean;
    onMouseDown: () => void;
    onMouseUp: () => void;
}

export default function Row(props: RowProps) {
    const { width, selectedColor, isMouseDown, onMouseDown, onMouseUp } = props;
    const pixels: React.ReactNode[] = [];

    for (let i = 0; i < width; i++) {
        pixels.push(
            <Pixel
                key={i}
                selectedColor={selectedColor}
                isMouseDown={isMouseDown}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            />
        );
    }

    return <div className='row'>{pixels}</div>
}
