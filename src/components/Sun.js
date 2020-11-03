import React from 'react';

const Sun = ({ className }) => {
    return (
        <div className={`sun ${className || ''}`}>
            <div className="wrapper wrapper--big">
                <div className="light__wrapper light__wrapper--big">
                    <div className="light__beam light__beam--big"></div>
                    <div className="light__beam light__beam--big"></div>
                </div>
                <div className="light__wrapper light__wrapper--big">
                    <div className="light__beam light__beam--big"></div>
                    <div className="light__beam light__beam--big"></div>
                </div>
                <div className="light__wrapper light__wrapper--big">
                    <div className="light__beam light__beam--big"></div>
                    <div className="light__beam light__beam--big"></div>
                </div>
                <div className="light__wrapper light__wrapper--big">
                    <div className="light__beam light__beam--big"></div>
                    <div className="light__beam light__beam--big"></div>
                </div>

                <div className="wrapper wrapper--small">
                    <div className="light__wrapper light__wrapper--small">
                        <div className="light__beam light__beam--small"></div>
                        <div className="light__beam light__beam--small"></div>
                    </div>
                    <div className="light__wrapper light__wrapper--small">
                        <div className="light__beam light__beam--small"></div>
                        <div className="light__beam light__beam--small"></div>
                    </div>
                    <div className="light__wrapper light__wrapper--small">
                        <div className="light__beam light__beam--small"></div>
                        <div className="light__beam light__beam--small"></div>
                    </div>
                    <div className="light__wrapper light__wrapper--small">
                        <div className="light__beam light__beam--small"></div>
                        <div className="light__beam light__beam--small"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sun;