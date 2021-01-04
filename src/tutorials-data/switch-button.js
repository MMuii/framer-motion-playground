export const files = [
{
    id: 0,
    name: 'Switch', 
    language: 'javascript',
    extension: 'js',
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div 
      className="container" 
      data-darkmode={isOn}
      onClick={() => setIsOn(!isOn)}
      style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
    >
      <motion.div layout className="handle">
        <AnimatePresence exitBeforeEnter initial={false}>
          <motion.i
            className={\`icon far fa-\${isOn ? 'moon' : 'sun'}\`}
            key={isOn ? 'moon' : 'sun'}
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }} 
            transition={{ duration: .2 }}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  )
}`
},
{
    id: 1,
    name: 'switch', 
    language: 'css',
    extension: 'scss',
    code: `.container {
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
  transition: all .3s;
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

  .container {
    background-image: linear-gradient(109.8deg,
                      rgba(62,5,116,1) -5.2%, 
                      rgba(41,14,151,1) -5.2%, 
                      rgba(216,68,148,1) 103.3%);
  }
    
  .icon {
    color: #501a96;
  }
}`
}
]

export const codeFragments = [
`import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="container">
      <div className="handle">

      </div>
    </div>
  )
}`,
`<div 
  className="container"
  data-darkmode={isOn}
  onClick={() => setIsOn(!isOn)}    
  style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
>
  <div className="handle">

  </div>
</div>`,
`<div 
  className="container"
  data-darkmode={isOn}
  onClick={() => setIsOn(!isOn)}    
  style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}
>
  <motion.div layout className="handle">

  </motion.div>
</div>`,
`<motion.div layout className="handle">
  <i className={\`icon far fa-\${isOn ? 'moon' : 'sun'}\`} />
</motion.div>`,
`<motion.div layout className="handle">
  <AnimatePresence exitBeforeEnter initial={false}>
    <motion.i
      className={\`icon far fa-\${isOn ? 'moon' : 'sun'}\`}
      key={isOn ? 'moon' : 'sun'}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 30, opacity: 0 }} 
      transition={{ duration: .2 }}
    />
  </AnimatePresence>
</motion.div>`
]