// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jessica Rob',
  tagline: 'the world doesnt revolve around me but my website does.',
  url: 'https://JessicaRob.github.io',
  baseUrl: '/site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'JessicaRob', // Usually your GitHub org/user name.
  projectName: 'site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JessicaRob/site',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
          {type: 'doc', docId: 'intro', position: 'left', label: 'Photo Albums'},
         // {to: '/blog', label: 'Blog', position: 'left'},
         {to: '/gallery', label: 'Playlists', position: 'left'},
         {label: 'vsco', href: 'https://vsco.co/jessica-rob', position: 'left'},
         {label: 'Instagram', href: 'https://instagram.com/jessica_rob_', position: 'left'},
         {href: 'https://github.com/JessicaRob/site', label: 'GitHub', position: 'right'},

        ],
      },
     /*  prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }, */
    }),
};

module.exports = config;
