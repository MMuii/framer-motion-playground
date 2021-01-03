import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const codeTagStyle = {
    color: 'rgb(204, 204, 204)',
    background: 'none',
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    overflowWrap: 'normal',
    lineHeight: 1.5,
    tabSize: 4,
    hyphens: 'none',
}

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
                style={tomorrow} 
                customStyle={{ lineHeight: 1 }}
                codeTagProps={{ style: codeTagStyle }}
                showLineNumbers
                className="code__content"
            >
                {selectedFile.code}
            </SyntaxHighlighter>
        </>
    )
}

export default CodeRenderer;