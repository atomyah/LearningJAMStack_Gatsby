module.exports = {
  siteMetadata: {
    title: `ヤー・スペーステクノロジー`,
    description: `【架空の会社】宇宙工学と意識エネルギー循環研究でオンリーワンを目指します`,
    author: `@atomyah`,
    siteUrl: `https://yah-space.tech`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://yah-space.tech`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt', // 追加
      options: {
        host: 'https://yah-space.tech',
        sitemap: 'https://yah-space.tech/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `information`,
        path: `${__dirname}/src/content/information`,
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
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
