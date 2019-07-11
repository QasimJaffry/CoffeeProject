require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Regular Joe's`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
			resolve: 'gatsby-plugin-snipcart',
			options: {
        apiKey: 'MDA5ZTM5YWItNTQ5NC00M2MwLTlhZGEtMzdlM2NmMzFkYWE0NjM2OTg0Mzc2MDEwMjI0NDc5',
        autopop:true
			},
		},
    {
      resolve: `gatsby-source-contentful`,
      options: {
        
        spaceId: 'b92z94jwhuz7',
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'JQxFMFDDHuHKlqbKAhFmtz8PQ0T9r59d39sKOpuWPdM'
      },
    },
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
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
