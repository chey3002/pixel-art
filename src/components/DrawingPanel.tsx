import React, { useRef, useState, type ReactNode } from 'react'
import Row from "./Row";
import { toPng } from 'html-to-image';

type DrawingPanelProps = {
    width: number,
    height: number,
    selectedColor: string
}

export default function DrawingPanel(props: DrawingPanelProps) {
    const { width, height, selectedColor } = props;
    const panelRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button === 0) { // Solo para clic izquierdo
            setIsMouseDown(true);
        }
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (e.button === 0) { // Solo para clic izquierdo
            setIsMouseDown(false);
        }
    };

    // Agregar event listeners globales para manejar cuando el mouse sale del panel
    React.useEffect(() => {
        const handleGlobalMouseUp = () => {
            setIsMouseDown(false);
        };

        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, []);

    const rows: ReactNode[] = [];
    for (let i = 0; i < height; i++) {
        rows.push(
            <Row
                key={i}
                width={width}
                selectedColor={selectedColor}
                isMouseDown={isMouseDown}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            />
        );
    }

    const handleExport = () => {
        if (panelRef.current === null) return;

        toPng(panelRef.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'drawing.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Error exporting:', err);
            });
    };

    return (
        <div id='drawingPanel'>
            <div
                id="pixels"
                ref={panelRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >
                {rows}
            </div>
            <button className='button' onClick={handleExport}>
                Export as PNG
            </button>
        </div>
    );
}
