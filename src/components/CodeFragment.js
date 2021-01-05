import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeFragment = ({ language, children }) => (
    <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={{ marginBottom: '2.5rem', fontSize: '1.6rem' }}
        showLineNumbers
    >
        {children}
    </SyntaxHighlighter>
)

export default CodeFragment;