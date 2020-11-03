import React, { useState } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';

// const Test = () => {
//     const [rotation, setRotation] = useState(0);

//     // const rotation = useMotionValue(0);

//     return (
//         <>  
//             <input type="range" onChange={e => setRotation(e.target.value)} step="20" />
//             <motion.div 
//                 className="test-3"
//                 animate={{ rotate: `${rotation}deg` }}
//                 transition={{ ease: 'linear' }}
//             ></motion.div>
//         </>
//     )
// }

const Test = () => {
    return (
        <div className="test-cloud cloud--size-1 rainy">
            <div className="rain__container">
                <div className="rain__stream" />
                <div className="rain__stream" />
                <div className="rain__stream" />
            </div>
            {/* <div className="rain-stream"></div> */}
        </div>
    )
}

export default Test;