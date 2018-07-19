module.exports = {
  siteMetadata: {
    title: 'Andrew Thompson\'s Portfolio'
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
}
