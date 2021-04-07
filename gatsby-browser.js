import React from 'react';
import PageLayout from './src/layouts/PageLayout';
import { MDXProvider } from '@mdx-js/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import './src/scss/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';

const Pre = styled.pre`
    text-align: left;
    margin: 1em 0;
    padding: 1rem;
    overflow: auto;
    font-family: 'Consolas';
    font-size: 1.6rem;
    line-height: 1.5;
`;

const Line = styled.div`
    display: table-row;
`;

const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding-right: 1em;
    user-select: none;
    opacity: 0.5;
`;

const LineContent = styled.span`
    display: table-cell;
`;

const components =  {
    pre: props => {
        const className = props.children.props.className || "";
        const matches = className.match(/language-(?<lang>.*)/);

        return (
            <Highlight 
                {...defaultProps} 
                code={props.children.props.children.trim()} 
                language={
                    matches && matches.groups && matches.groups.lang
                        ? matches.groups.lang
                        : ""
                }
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <Pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <Line key={i} {...getLineProps({ line, key: i })}>
                                <LineNo>{i + 1}</LineNo>
                                <LineContent>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token, key })} />
                                    ))}
                                </LineContent>
                            </Line>
                        ))}
                    </Pre>
                )}
            </Highlight>
        )
    },
    a: props => <a target="_blank" {...props} />
}

export const wrapRootElement = ({ element }) => {
    return (
        <>
            <Helmet 
                title="Framer Motion Playground" 
                meta={[
                    {
                        name: 'description',
                        content: 'Interactive blog with Framer Motion Tutorials.'
                    }
                ]}    
            />

            <MDXProvider components={components}>
                {element}
            </MDXProvider>
        </>
    )
}

export const wrapPageElement = ({ element, props }) => {
    return <PageLayout {...props}>{element}</PageLayout>
}

export const shouldUpdateScroll = () => false;
