import React from 'react';
import Switch from '../components/Switch';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const data = {
    files: [
        {
            id: 0,
            name: 'Switch', 
            language: 'javascript',
            extension: 'js',
            code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Switch = () => {
    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => setIsOn(!isOn);

    const transition = {
        duration: .2
    }

    const variants = {
        enter: {
            y: -30,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: 30,
            opacity: 0
        }
    }

    return (
        <div 
            className="switch background dark"
            data-darkmode={isOn}
        >
            <div 
                className="switch-container" 
                onClick={toggleSwitch}
                style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
            >
                <motion.div 
                    layout 
                    className="handle"
                >
                    <AnimatePresence exitBeforeEnter initial={false}>
                        {isOn 
                        ? (
                            <motion.i 
                                className="icon far fa-moon"
                                key="moon"
                                variants={variants}
                                initial="enter"
                                animate="animate"
                                exit="exit" 
                                transition={transition}
                            />
                        )
                        : (
                            <motion.i 
                                className="icon far fa-sun"
                                key="sun"
                                variants={variants}
                                initial="enter"
                                animate="animate"
                                exit="exit" 
                                transition={transition}
                            />
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}`
        },
        {
            id: 1,
            name: 'switch', 
            language: 'css',
            extension: 'scss',
            code: `.switch {
    transition: all .3s;

    &.background {
        height: 100%;
        width: 100%;
        display: grid;
        align-items: center;
        justify-items: center;
    }

    .switch-container {
        height: 40px;
        width: 100px;
        background-image: radial-gradient(circle farthest-corner at 10% 20%, 
                                            rgba(253,203,50,1) 0%, 
                                            rgba(244,56,98,1) 100.2%);
        border-radius: 25px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        padding: 0 5px;
        cursor: pointer;
    }

    .handle {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        display: grid;
        align-items: center;
        justify-items: center;
        background-color: #fff;
        overflow: hidden;
    }

    .icon {
        color: #f88748;
    }

    &[data-darkmode="true"] {
        background-color: #52527a;

        .switch-container {
            background-image: linear-gradient(109.8deg,
                                                rgba(62,5,116,1) -5.2%, 
                                                rgba(41,14,151,1) -5.2%, 
                                                rgba(216,68,148,1) 103.3%);
        }
        
        .icon {
            color: #501a96;
        }
    }
}`
        }
    ],
    content: (
        <>
            <h1>Switch button</h1>
            <h2>Simple switch button, styled as theme changer</h2>

            <div className="guide__component-wrapper">
                <Switch />
            </div>

            <p>In this tutorial you will learn how to recreate this very basic switch button using recently added <code>layout</code> prop, fontawesome free icons and some simple css code. I styled the component as a theme changing button, but of course you can easily change its purpuose by picking different gradients or icons.</p>

            <p>On the right side of the page you can see completed component's code, both js and css stylesheet. Next steps will show you how to create such a button step by step.</p>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet eos animi maxime, saepe, autem vero blanditiis quasi molestias omnis alias eius aut. In vel asperiores, dolor accusamus distinctio saepe unde iure doloremque iusto nulla ratione culpa tenetur assumenda, dolorum soluta repellat inventore reprehenderit corporis libero neque. Ea, modi sapiente consectetur asperiores dolor saepe beatae blanditiis tempora aspernatur quia quod animi iusto, velit ullam. Error exercitationem, soluta rem porro repudiandae dolor nihil veritatis labore animi voluptas dolorem voluptates eligendi sed illum assumenda expedita ratione velit nulla doloremque, quas at quibusdam deserunt! Aut, quidem soluta id unde qui magnam dolores aspernatur!</p>

            <SyntaxHighlighter language="javascript" style={atomOneDark}>
                {'const test = () => return false'}
            </SyntaxHighlighter>
            
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique vero soluta omnis ea natus veniam delectus aspernatur consectetur expedita nisi animi nobis, voluptas quisquam incidunt, inventore quae ex, ratione mollitia tenetur assumenda enim. Porro ducimus vero nam quia ad. Similique.</p>
        </>
    )
}