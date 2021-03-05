import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MobileView, BrowserView } from 'react-device-detect';
import FullPageContainer from '../components/FullPageContainer';
import Guide from '../components/Guide';
import CodeRenderer from '../components/CodeRenderer';
// import { useWindowSize } from '../hooks/useWindowSize';
import BookFilled from '../icons/book-filled.inline.svg';
import Book from '../icons/book.inline.svg';
import BracketFilled from '../icons/bracket-filled.inline.svg';
import Bracket from '../icons/bracket.inline.svg';

export const query = graphql`
    query($title: String! $pathSlug: String!) {
        mdx(frontmatter: {path: {eq: $pathSlug}}) {
            frontmatter {
                title
                path
            }
            body
        }
        allMdx(filter: {frontmatter: {type: {eq: "tutorial-file"}, tutorial: {eq: $title}}}) {
            nodes {
                frontmatter {
                    name
                    extension
                    language
                }
                body
            }
        }
    }
`

export default function Template ({ data: { mdx: post, allMdx: { nodes: files } }}) {
    const [showCode, setShowCode] = useState(false);
    // const { width } = useWindowSize();

    const { body } = post;

    const filesData = files.map((file, idx) => {
        return {
            id: idx,
            name: file.frontmatter.name,
            language: file.frontmatter.language,
            extension: file.frontmatter.extension,
            code: file.body
        }
    })

    return (
        <>
            <BrowserView>
                <FullPageContainer className="tutorial">
                    <Guide 
                        isMobile={false} 
                        identifier={post.frontmatter.title} 
                        url={`https://relaxed-kepler-bb2656.netlify.app${post.frontmatter.path}`} 
                        title={post.frontmatter.title}
                    >
                        <MDXRenderer>
                            {body}
                        </MDXRenderer>
                    </Guide>
                    <div className="code__wrapper">
                        <CodeRenderer files={filesData} isMobile={false}/>
                    </div>
                </FullPageContainer>
            </BrowserView>

            <MobileView>
                <FullPageContainer className="tutorial">
                    {showCode
                        ? (
                            <div className="code__wrapper">
                                <CodeRenderer files={filesData} isMobile={true}/>
                            </div> 
                        )
                        : (
                            <Guide 
                                isMobile={true} 
                                identifier={post.frontmatter.title} 
                                url={`https://relaxed-kepler-bb2656.netlify.app${post.frontmatter.path}`} 
                                title={post.frontmatter.title}
                            >
                                <MDXRenderer>
                                    {body}
                                </MDXRenderer>
                            </Guide>
                        )
                    }

                    <div className="mobile-navbar">
                        <div className="mobile-navbar__icon">
                            {showCode ? <Book onClick={() => setShowCode(false)}/> : <BookFilled />}
                            <span>Guide</span>
                        </div>
                        <div className="mobile-navbar__icon">
                            {showCode ? <BracketFilled/> : <Bracket onClick={() => setShowCode(true)}/>}
                            <span>Code</span>
                        </div>
                    </div>
                </FullPageContainer>
            </MobileView>
        </>
    )

    // if (width >= 768) {
    //     return (
            // <FullPageContainer className="tutorial">
            //     <Guide isMobile={false} identifier={post.frontmatter.title} url={`https://relaxed-kepler-bb2656.netlify.app${post.frontmatter.path}`} title={post.frontmatter.title}>
            //         <MDXRenderer>
            //             {body}
            //         </MDXRenderer>
            //     </Guide>
            //     <div className="code__wrapper">
            //         <CodeRenderer files={filesData} isMobile={false}/>
            //     </div>
            // </FullPageContainer>
    //     )
    // }

    // return (
        // <FullPageContainer className="tutorial">
        //     {showCode
        //     ? (
        //         <div className="code__wrapper">
        //             <CodeRenderer files={filesData} isMobile={true}/>
        //         </div> 
        //     )
        //     : (
        //         <Guide isMobile={true} identifier={post.frontmatter.title} url={`https://relaxed-kepler-bb2656.netlify.app${post.frontmatter.path}`} title={post.frontmatter.title}>
        //             <MDXRenderer>
        //                 {body}
        //             </MDXRenderer>
        //         </Guide>
        //     )}

        //     <div className="mobile-navbar">
        //         <div className="mobile-navbar__icon">
        //             {showCode ? <Book onClick={() => setShowCode(false)}/> : <BookFilled />}
        //             <span>Guide</span>
        //         </div>
        //         <div className="mobile-navbar__icon">
        //             {showCode ? <BracketFilled/> : <Bracket onClick={() => setShowCode(true)}/>}
        //             <span>Code</span>
        //         </div>
        //     </div>
        // </FullPageContainer>
    // )
}