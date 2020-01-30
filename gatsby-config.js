module.exports = {
  siteMetadata: {
    title: `Long Beach Anarchist Collective`,
    description: ``,
    author: `@anarchistlb`,
    navLinks: [
      {
        url: "/",
        name: "Home",
      },
      {
        url: "/food-not-bombs/",
        name: "Food not Bombs",
      },
      {
        url: "/discussion-group/",
        name: "Discussion Group",
      },
      {
        url: "/events/",
        name: "Events",
      },
      {
        url: "/contact/",
        name: "Contact",
      },
    ],
    socialLinks: [
      {
        url: "https://twitter.com/anarchistlb",
        name: "Twitter: @anarchistlb",
      },
      {
        url: "mailto:libsoclb@protonmail.com",
        name: "Email: libsoclb@protonmail.com",
      },
      {
        url: "https://ko-fi.com/fnbinthelbc",
        name: "Support us: donate on Ko-fi",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `markdown-pages`,
      },
    },
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
        icon: `src/assets/images/anarchy_symbol.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`staatliches`, `montserrat`],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
