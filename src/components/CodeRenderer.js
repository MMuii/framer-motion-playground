import React, { useState } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const CodeRenderer = ({ files, isMobile }) => {
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
                <span>{isMobile ? 'Code' : 'Completed code'}</span>
                {renderFiles()}
            </div>
            <MDXRenderer>
                {selectedFile.code}
            </MDXRenderer>
        </>
    )
}

export default CodeRenderer;