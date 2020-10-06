import React from 'react';
import { Link } from 'gatsby';
import FullPageContainer from '../components/FullPageContainer';

const Tutorial = props => {
    
    return (
        <FullPageContainer className="tutorial">
            <div className="guide-wrapper">
                guide wrapper
                <Link to="/">Back</Link>
            </div>
            <div className="code-wrapper">
                <span>code wrapper</span>
            </div>
        </FullPageContainer>

        // <div className="tutorial container">
        //     <div className="guide-wrapper">
        //         guide wrapper
        //         <Link to="/">Back</Link>
        //     </div>
        //     <div className="code-wrapper">
        //         <span>code wrapper</span>
        //     </div>
        // </div>
    )
}

export default Tutorial;