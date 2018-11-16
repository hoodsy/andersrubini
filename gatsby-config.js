module.exports = {
  siteMetadata: {
    title: 'Anders Rubini',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-resolve-src',
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: 'andyrubini.wordpress.com',
        protocol: 'https',
        hostingWPCOM: true,
        useACF: false,
        auth: {
          wpcom_app_clientSecret:
            '96P90SPd7Am7juLJvJzTAnDQwlIOte8BeQBk44yrsdrvMSVFCwRpSGjV3Gv14aSI',
          wpcom_app_clientId: '63875',
          wpcom_user: 'bernard.logan4@gmail.com',
          wpcom_pass: '34outDAdoor',
        },
      },
    },
  ],
}
