import React, { useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const items = [
    {
        text: 'Your profile',
        icon: 'fas fa-user'
    },
    {
        text: 'Team',
        icon: 'fas fa-user-friends'
    },
    {
        text: 'Add contact',
        icon: 'fas fa-user-plus'
    },
    {
        text: 'Chats',
        icon: 'fas fa-comment-dots'
    },
    {
        text: false
    },
    {
        text: 'Files',
        icon: 'fas fa-folder'
    },
    {
        text: 'New file',
        icon: 'fas fa-file-medical'
    }
]

const containerVariants = {
    opened: { width: 200 },
    closed: { width: 80 }
}

const menuItemVariants = {
    initial: {
        opacity: 0
    },
    opened: {
        opacity: 1,
        transition: { 
            duration: .9, 
            ease: 'easeIn'
        }
    },
    closed: {
        opacity: 0,
        transition: {
            duration: .9,
            ease: [.1, 1, .57, 1]
        }
    }
}

const menuIconVariants = {
    opened: i => ({
        x: [0, i*2.4, 0],
    }), 
    closed: i => ({
        x: [0, -i*2.4, 0],
    })
}

const MenuItem = ({ isOpened, i, item: { text, icon } }) => {
    return (
        <motion.div 
            className="option-container" 
            variants={menuIconVariants}
            custom={i}
            transition={{ duration: .8 }}
        >
            <i className={icon} />
            <AnimatePresence>
                {isOpened && (
                    <motion.div 
                        initial="initial"
                        variants={menuItemVariants}
                    >
                        {text}
                    </motion.div>)}
            </AnimatePresence>
        </motion.div>        
    );
}

const SideMenu = () => {
    const [isOpened, setIsOpened] = useState(false);
    const controls = useAnimation();

    return (
        <div className="side-menu">
            <motion.div 
                className="container"
                initial={{ width: 80 }}
                variants={containerVariants}
                animate={isOpened ? 'opened' : 'closed'}
                transition={{ 
                    duration: .8, 
                    staggerChildren: .015, 
                    staggerDirection: isOpened ? 1 : -1 
                }}
                onMouseOver={() => controls.start({ left: 'calc(100% - 4rem)' })}
                onMouseOut={() => !isOpened && controls.start({ left: 'calc(100% - 6rem)' })} 
            >
                <div className="menu-container" >
                    <div className="logo-container">
                        <div className="logo-icon">L</div>

                        <AnimatePresence>
                            {isOpened && (
                                <motion.div variants={menuItemVariants}>
                                    <div className="logo-text">Logo</div>
                                </motion.div>)}
                        </AnimatePresence>
                    </div>

                    <motion.div 
                        className="search-container" 
                        animate={{ background: isOpened ? '#e6e6e6' : '#ffffff' }}
                        transition={{ duration: .6 }}
                        whileHover={{ 
                            background: isOpened ? '#d9d9d9' : '#ffffff',
                            transition: { duration: .2 } 
                        }}
                    >
                        <i className="fas fa-search" />
                        <AnimatePresence>
                            {isOpened && (
                                <motion.input 
                                    variants={menuItemVariants}
                                    placeholder="Search"
                                    initial="initial"
                                    animate="opened"
                                    exit="closed"
                                />)}
                        </AnimatePresence>
                    </motion.div>

                    {items.map((item, i) => {
                        if (!item.text) return (
                            <motion.div 
                                className="line" 
                                key={i}
                                animate={{ 
                                    width: isOpened ? '75%' : '60%',
                                    transition: { duration: .8 }
                                }}
                            />
                        )

                        return (
                            <MenuItem 
                                isOpened={isOpened} 
                                item={item} 
                                i={i+1}
                                key={i} 
                            />
                        )
                    })}
                </div>
            
                <motion.div 
                    className="expand-btn-container"
                    animate={controls}
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <motion.i 
                        className="fas fa-chevron-up" 
                        animate={{ rotate: isOpened ? -135 : 45 }}
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default SideMenu
