import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const UploadButton = () => {
    const [isAnimating, setIsAnimating] = useState(false);

    const uploadControls = useAnimation();
    const loadingControls = useAnimation();
    const doneControls = useAnimation();

    //upload -> loading -> done -> upload
    const animate = async () => {
        console.log('animating');
        setIsAnimating(true);

        uploadControls.start({
            zIndex: 1
        })

        await loadingControls.start({
            top: 0
        });

        uploadControls.start({
            top: '-100%',
            transition: { duration: 0 }
        })

        await doneControls.start({ 
            top: 0,
            transition: { delay: 1 }
        });

        loadingControls.start({
            top: '-100%',
            transition: { duration: 0 }
        })

        await uploadControls.start({ 
            top: 0,
            zIndex: 4,
            transition: { delay: 1 }
        })

        doneControls.start({
            top: '-100%',
            transition: { duration: 0 }
        })

        setIsAnimating(false);
    }

    return (
        <div className="upload-button">
            <div className="wrapper" onClick={() => !isAnimating && animate()}>
                <motion.div 
                    className="container upload"
                    // initial={{ top: '0%' }}
                    animate={uploadControls}
                >
                    <i className="fas fa-angle-double-up" />
                    <div>upload</div>
                </motion.div>
                <motion.div 
                    className="container loading"
                    // initial={{ top: '-100%' }}
                    animate={loadingControls}
                >
                    <motion.div 
                        className="loader" 
                        animate={{ 
                            rotate: 360,
                            transition: { repeat: Infinity, ease: 'linear', duration: .5 }
                        }}
                    />
                    <div>loading</div>
                </motion.div>
                <motion.div 
                    className="container done"
                    // initial={{ top: '-100%' }}
                    animate={doneControls}
                >
                    <i className="fas fa-angle-double-up" />
                    <div>done</div>
                </motion.div>
            </div>
        </div>
    )
}

export default UploadButton;
