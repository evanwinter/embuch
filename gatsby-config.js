module.exports = {
  siteMetadata: {
    title: `Emily Buchberger`,
    siteUrl: `https://emilybuchberger.design`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-layout",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./static/daisy.svg",
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
          "@context": "/src/context",
          "@data": "/src/data",
          "@images": "/src/images",
          "@styles": "/src/styles",
          "@utils": "/src/utils",
        },
        extensions: ["js", "svg"],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
