import React from 'react';
import { use100vh } from 'react-div-100vh';

const FullPageContainer = ({ children, className }) => {
    const isSSR = typeof window === "undefined";
    const height = use100vh() || '100%';
    
    if (isSSR) return <div className={className}>{children}</div>;
    return <div className={className} style={{ height }}>{children}</div>
}

export default FullPageContainer;