module.exports = {
  siteMetadata: {
    title: `Emily Buchberger`,
    siteUrl: `https://emilybuchberger.design`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "UkJsyURAuZ2kNOeTrDBERokXDVsRQzNulcBFKOWvjLw",
        spaceId: "xomu64mpvs1b",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./static/flower.svg",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "/src/components",
          "@images": "/src/images",
          "@utils": "/src/utils",
          "@styles": "/src/styles",
        },
        extensions: ["js", "svg"],
      },
    },
  ],
};
