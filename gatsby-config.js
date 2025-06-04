/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Python Sinhala`,
    author: `OpenArchitex`,
    description: `Website for Python Sinhala`,
    siteUrl: `https://www.pythonsinhala.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.svg",
      },
    },
    "gatsby-plugin-sharp",
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
      resolve: `gatsby-source-mongodb`,
      options: {
        server: {
          address: process.env.DB_SERVER_ADDRESS,
          port: process.env.DB_SERVER_PORT,
        },
        auth: {
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
        },
        dbName: process.env.DB_NAME,
        extraParams: {
          authSource: "admin",
          rewrites: true,
          ssl: true,
        },
        collection: [`chapter`, `video`],
      },
    },
  ],
};
