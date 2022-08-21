module.exports = {
  pathPrefix: '',
  siteMetadata: {
    title: 'Front-end Developer',
    description: 'web dev portfolio',
    contacts: {
      adress: 'Denpasar, Bali',
      phone: '+62 82161864273',
      email: 'laughface809@gmail.com',
    },
    socials: {
      facebook: 'https://facebook.com/laughface809',
      instagram: 'https://instagram.com/laughface809',
      telegram: 'https://t.me/laughface809',
      github: 'https://github.com/laughface809',
      linkedin: 'https://linkedin.com/in/laughface809',
      twitter: 'https://twitter.com/laughface809',
    },
  },
  plugins: [
    // `gatsby-plugin-transition-link`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', // Needed for dynamic images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `projects`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1080,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'default title',
        short_name: 'short name',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'minimal-ui',
        icon: './static/logo.svg',
      },
    },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-offline',
  ],
}
