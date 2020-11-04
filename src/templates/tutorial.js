import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import FullPageContainer from '../components/FullPageContainer';

export const query = graphql`
    query($pathSlug: String!) {
        mdx(frontmatter: { path: { eq: $pathSlug } }) {
            frontmatter {
                title
                path
            }
            body
        }
    }
`;

export default function Template({ data: { mdx: post } }) {
    const { title } = post.frontmatter;
    const { body } = post;

    return (
        <FullPageContainer className="tutorial">
            <MDXRenderer>
                {body}
            </MDXRenderer>
        </FullPageContainer>
    );
}