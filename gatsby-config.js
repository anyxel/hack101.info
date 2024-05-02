require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: process.env.APP_TITLE,
    description: process.env.APP_DESCRIPTION,
    author: process.env.APP_NAME,
    siteUrl: process.env.APP_URL,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.APP_NAME,
        short_name: process.env.APP_NAME,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        display: `minimal-ui`,
        icon: `src/assets/images/devsonket-icon.png`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: {
    //     output: `/sitemap.xml`,
    //     exclude: ["/print/*", "/singlepage"],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
