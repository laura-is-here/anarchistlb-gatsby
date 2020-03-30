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
        url: "/blog/",
        name: "Blog",
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Long Beach Anarchist Collective`,
        short_name: `Anarchist LB`,
        start_url: `/`,
        background_color: `#ecf0f1`,
        theme_color: `hsl(6, 5%, 5%)`,
        display: `minimal-ui`,
        icon: `src/assets/images/anarchy_symbol.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`cambay`, `montserrat`],
      },
    },
    `gatsby-plugin-emotion`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
