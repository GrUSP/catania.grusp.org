module.exports = {

  // Title of your website
  title: 'PUG Catania',

  // Description of your website
  description: 'Php User Group Catania',

  // Language of your website
  locales: {
    '/': {
      lang: 'en-US',
    },
  },

  plugins: [
    [
      'social-share',
      {
        networks: ['facebook', 'telegram'],
        fallbackImage: '/hero.png',
        autoQuote: true,
        isPlain: false,
      },
    ],
  ],

  // Theme to use
  //theme: 'meteorlxy',
  //extend: 'vuepress-theme-meteorlxy',

  // Theme config
  themeConfig: {

    sidebar: [
      { text: 'Home', link: '/', exact: true },
    ],
    // Language of this theme. See the [Theme Language] section below.
    lang: 'en-US',

    // Personal infomation (delete the fields if you don't have / don't want to display)
    personalInfo: {
      // Nickname
      nickname: 'PUG Catania',

      // Introduction of yourself (HTML supported)
      description: 'Happy Coding',

      // Email
      email: '',

      // Your location
      location: 'Via Messina 609, Catania, Italia',

      // Your organization
      organization: '',

      // Your avatar image
      // Set to external link
      avatar: '/assets/img/logo-pug-catania.jpg',
      // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
      // avatar: '/img/avatar.jpg',

      // Accounts of SNS
      sns: {
        // Github account and link
        github: {
          account: 'this site',
          link: 'https://github.com/GrUSP/catania.grusp.org',
        },

        // Facebook account and link
        facebook: {
          account: 'PUG CT',
          link: 'https://www.facebook.com/pugcatania',
        },

        // Twitter account and link
        twitter: {
          account: '@CataniaPug',
          link: 'https://twitter.com/CataniaPug'
        }
      },
    },

    // Header Config (Optional)
    header: {
      // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
      background: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },

      // show title in the header or not
      showTitle: true,
    },

    // Footer Config (Optional)
    footer: {
      // Show 'Powered by VuePress' or not (enable it to support VuePress)
      poweredBy: true,

      // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
      poweredByTheme: true,

      // Add your custom footer (HTML supported)
      custom: 'Copyright 2018-present <a href="https://github.com/meteorlxy" target="_blank">meteorlxy</a> | MIT License',
    },

    // Info Card Config (Optional)
    infoCard: {
      // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
      headerBackground: {
        // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        url: '/assets/img/bg',

        // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        useGeo: true,
      },
    },

    // Show the last updated time of your posts
    lastUpdated: true,

    // The content of your navbar links
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Doc eventi', link: '/pages/doc-eventi/', exact: true },
      { text: 'Contatti', link: '/pages/contatti/', exact: true },
    ],

    // Comments config. See the [Posts Comments] section below.
    //comments: {
    //  owner: 'meteorlxy',
    //  repo: 'vuepress-theme-meteorlxy',
    //  clientId: 'MY_CLIENT_ID',
    //  clientSecret: 'MY_CLIENT_SECRET',
    //},

    // Pagination config (Optional)
    pagination: {
      perPage: 5,
    },

    // Default Pages (Optional, the default value of all pages is `true`)
    defaultPages: {
      // Allow theme to add Home page (url: /)
      home: true,
      // Allow theme to add Posts page (url: /posts/)
      posts: true,
    },
  },
}
