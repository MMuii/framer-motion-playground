import React from 'react';
import { use100vh } from 'react-div-100vh';

const FullPageContainer = props => {
    const height = use100vh() || '100%';

    return <div style={{ height }} ref={props.ref} {...props} />
}

export default FullPageContainer;