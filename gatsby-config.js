module.exports = {
  siteMetadata: {
    title: `Framer Motion Playground`,
    siteUrl: `https://www.framermotionplayground.com`,
    description: `Interactive blog with Framer Motion tutorials`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
        resolve: 'gatsby-plugin-mdx',
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `posts`,
            path: `${__dirname}/src/markdown/`,
        }, 
    },
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sass`,
    {
        resolve: 'gatsby-plugin-google-fonts',
        options: {
            fonts: [
                'lato\:400,700,900',
                'poppins\:400,700,900',
                'inconsolata\:400',
                'roboto\:400',
                'open sans\:400'
            ]
        }
    },
    {
        resolve: 'gatsby-plugin-react-svg',
        options: {
            rule: {
                include: /\.inline\.svg$/,
            },
        },
    },
    {
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: `framer-motion-playground-dev`
        }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
