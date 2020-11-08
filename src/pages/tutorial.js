import React, { useState } from 'react';
import { Link } from 'gatsby';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import FullPageContainer from '../components/FullPageContainer';
import { data } from '../tutorials-data/switch-button';

const Tutorial = props => {
    return (
        <div>strona do wywalenia</div>
    );

    // const { files, content } = data;
    // const [selectedFile, setSelectedFile] = useState(files[0]);

    // const renderFiles = () => {
    //     return files.map(({id, name, extension}, index) => {
    //         const isSelected = selectedFile.id === id ? 'selected' : '';

    //         return (
    //             <div 
    //                 key={index} 
    //                 className={`code__file code__file--${extension} ${isSelected}`}
    //                 onClick={() => setSelectedFile(files[index])}
    //             >
    //                 {name}<span>.{extension}</span>
    //             </div>
    //         )
    //     });
    // }
    
    // return (
    //     <FullPageContainer className="tutorial">
    //         <div className="guide guide__wrapper">
    //             <div className="guide__content">
    //                 {content}
    //             </div>
    //         </div>
    //         <div className="code__wrapper">
    //             <div className="code__navbar">
    //                 <span>Completed code</span>
    //                 {renderFiles()}
    //             </div>
    //             <SyntaxHighlighter 
    //                 language={selectedFile.language}
    //                 style={atomOneDark} 
    //                 showLineNumbers
    //                 className="code__content"
    //             >
    //                 {selectedFile.code}
    //             </SyntaxHighlighter>
    //         </div>
    //     </FullPageContainer>
    // )
}

export default Tutorial;