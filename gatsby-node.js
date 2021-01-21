exports.createPages = async({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx(filter: {frontmatter: {type: {eq: "tutorial"}}}) {
                nodes {
                    frontmatter {
                        title
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
                title: page.frontmatter.title
            },
        });
    });
}