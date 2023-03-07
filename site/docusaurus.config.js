// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jessica Rob',
  tagline: 'the world doesnt revolve around me but my website does.',
  url: 'https://JessicaRob.github.io',
  baseUrl: '/site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico', // tab icon
  organizationName: 'JessicaRob', //GitHub username.
  projectName: 'site', // repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/JessicaRob/site',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
        },
        items: [
         {to: '/playlists', label: 'playlists', position: 'left'},
         {to: '/books', label: 'books', position: 'left'},
         //{type: 'doc', docId: 'books', position: 'left', label: 'books'},
         {type: 'doc', docId: 'intro', position: 'left', label: 'recipes'},
         {label: 'vsco', to: 'https://vsco.co/jessica-rob', position: 'left'},
         {label: 'instagram', to: 'https://instagram.com/jessica_rob_', position: 'left'},
         {href: 'https://github.com/JessicaRob/site', label: 'github', position: 'right'},

        ],
      },
     /*  prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },  */
    }),
};

module.exports = config;
