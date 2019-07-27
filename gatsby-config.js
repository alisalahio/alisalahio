module.exports = {
  siteMetadata: {
    title: `Ali Salah's Porfolio & Blog`,
    author: `Ali Salah`,
    description: `My portfolio and blog.`,
    siteUrl: `https://ali.salah.io/`,
    social: {
      twitter: `alisalahio`,
      github: `alisalahio`,
      mail: `ali@salah.io`,
    },
    projects: [
      {
        title: `Sup.`,
        description: `Your startup needs a status page`,
        url: `https://supstatus.com/`,
        moreLinks: [
          {
            type: `Product Hunt`,
            url: `https://www.producthunt.com/posts/sup-status`,
          },
          {
            type: `Twitter`,
            url: `https://twitter.com/alisalahio/status/1154307393288884227`,
          },
        ],
      },
      {
        title: `The writing race`,
        description: `May the faster writer win!`,
        url: `https://github.com/alisalahio/writing-race/`,
        moreLinks: [
          {
            type: `Product Hunt`,
            url: `https://www.producthunt.com/posts/the-writing-race`,
          },
        ]
      },
      {
        title: `Facebook alternatives`,
        description: `You can now switch easier!`,
        url: `https://github.com/alisalahio/facebook-alternatives/`,
        moreLinks: [
          {
            type: `Product Hunt`,
            url: `https://www.producthunt.com/posts/delete-facebook-wiki`,
          },
        ]
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}