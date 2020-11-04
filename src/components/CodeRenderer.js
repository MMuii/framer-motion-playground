import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeRenderer = ({ files }) => {
    const [selectedFile, setSelectedFile] = useState(files[0]);

    const renderFiles = () => {
        return files.map(({id, name, extension}, index) => {
            const isSelected = selectedFile.id === id ? 'selected' : '';

            return (
                <div 
                    key={index} 
                    className={`code__file code__file--${extension} ${isSelected}`}
                    onClick={() => setSelectedFile(files[index])}
                >
                    {name}<span>.{extension}</span>
                </div>
            )
        });
    }

    return (
        <>
            <div className="code__navbar">
                <span>Completed code</span>
                {renderFiles()}
            </div>
            <SyntaxHighlighter 
                language={selectedFile.language}
                style={atomOneDark} 
                showLineNumbers
                className="code__content"
            >
                {selectedFile.code}
            </SyntaxHighlighter>
        </>
    )
}

export default CodeRenderer;