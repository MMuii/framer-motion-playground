import { useState } from 'react';

export const useMousePositionWithinElement = (ref, offset = [0, 0]) => {
    const [[x, y], setPosition] = useState([0, 0]);

    return [
        [x, y],
        (e) => {
            const { left, top } = ref.current.getBoundingClientRect();
            const x = e.clientX - left - offset[0];
            const y = e.clientY - top - offset[1];
            setPosition([x, y]);
        },
        ([x, y]) => setPosition([x, y])
    ]
}