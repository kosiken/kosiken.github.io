module.exports = {
  siteMetadata: {
    description: 'Personal page of Allison Kosisochukwu',
    locale: 'en',
    title: 'Allison Kosisochukwu',
  },
  plugins: [
    {
      resolve: '@wkocjan/gatsby-theme-intro',
      options: {
        basePath: '/',
        contentPath: 'content/',
        showThemeLogo: true,
        theme: 'blue',
      },
    },
  ],
};
