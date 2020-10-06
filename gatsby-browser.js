import React from 'react';
import Layout from './src/components/Layout';

import './src/scss/main.scss';
import '@fortawesome/fontawesome-free/css/all.css';

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
}

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
