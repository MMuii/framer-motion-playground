exports.createPages = async({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        path
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panic('failed to create posts ', result.errors);
    }

    const pages = result.data.allMdx.nodes;
    
    pages.forEach(page => {
        actions.createPage({
            path: page.frontmatter.path,
            component: require.resolve('./src/templates/tutorial.js'),
            context: {
                pathSlug: page.frontmatter.path,
            },
        });
    });
}

//do zwyklego markdowna
// const path = require(`path`);

// exports.createPages = async ({ actions, graphql, reporter }) => {
//     const { createPage } = actions;
//     const tutorialTemplate = path.resolve(`src/templates/tutorial.js`);
//     const result = await graphql(`
//         {
//             allMarkdownRemark {
//                 edges {
//                     node {
//                         frontmatter {
//                             path
//                         }
//                     }
//                 }
//             }
//         }
//     `)

//     if (result.errors) {
//         reporter.panicOnBuild('Error while running GraphQL query.');
//         return;
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//         createPage({
//             path: node.frontmatter.path,
//             component: tutorialTemplate,
//             context: {}
//         })
//     })
// }