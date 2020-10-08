import React from 'react';
import { use100vh } from 'react-div-100vh';

const FullPageContainer = props => {
    const { children, ...restOfProps } = props;
    const height = use100vh() || '100%';

    return (
        <div {...restOfProps} style={{ height }} ref={props.ref}>
            {children}
        </div>
    )
}

export default FullPageContainer;