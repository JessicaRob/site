import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

// images are from undraw and use the HEX code #a79886 
const FeatureList = [
  {
    title: 'Playlists', // Homepage Icon Label
   // imageUrl: '/img/docusaurus.png', //path to image in static img folder

    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Homepage Undraw Image
  // Svg: require('@site/static/img/landing/brunch.svg').default, // Homepage Undraw Image
    url: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/brunch-landing/', //Link to Landing Page for Corresponding Recipe Section
  },
  {
    title: 'Photo Albums', // Homepage Icon Label
   // imageUrl: '/img/docusaurus.png', //path to image in static img folder

    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Homepage Undraw Image
  // Svg: require('@site/static/img/landing/brunch.svg').default, // Homepage Undraw Image
    url: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/brunch-landing/', //Link to Landing Page for Corresponding Recipe Section
  },
  {
    title: 'Dessert Recipes', // Homepage Icon Label
   // imageUrl: '/img/docusaurus.png', //path to image in static img folder

    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Homepage Undraw Image
  // Svg: require('@site/static/img/landing/brunch.svg').default, // Homepage Undraw Image
    url: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/brunch-bar/brunch-landing/', //Link to Landing Page for Corresponding Recipe Section
  },
  
/*   {
    title: 'Photo Albums',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Homepage Undraw Image
   // Svg: require('@site/static/img/landing/dinner.svg').default,
    url: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dinner-bar/dinner-landing/',
  },
  {
    title: 'Dessert Recipes',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Homepage Undraw Image
    url: 'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/dessert-landing/',
  }, */
];

// puts the above list into a function so that the title and svg appear in the correct order, are formatted and link to the URLs
function Feature({Svg, title, url}) {
  const svgUrl = (Svg);
  return (
    <div className={clsx('col col--4')}>
        <Link to={url}>
     {Svg && (
          <div className="text--center">
            <Svg className={styles.featureSvg} alt={title} />
          </div> 
      )}
      <div className="text--center padding-horiz--md"> 
        <h3>{title}</h3>
      </div>
      </Link>
      
    </div>
  );
} 

//Formats the Homepage Header, use to edit website title on homescreen, tagline, email sign up button
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* titles & subtitles pulled from site config so they only need to be changed in one place*/}
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

         {/* icons in homepage banner*/}
{/*          <img className={styles.heroImg} src="img/docusaurus.png" /> 
         <img className={styles.heroImg} src="img/docusaurus.png" /> 
         <img className={styles.heroImg} src="img/docusaurus.png"  />   */}
         
         {/*button text & link*/}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://vsco.co/jessica-rob/gallery">
            VSCO
          </Link>
        </div>            
      </div>

    </header>
  );
}

// makes the content above display to the interface so that it can actually be seen, mapping of above features/ images in list to order them etc.
export default function Home() {
 const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}>
        <HomepageHeader/>
      <main>
        {FeatureList && FeatureList.length > 0 && (
         <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        )}
      </main>
    </Layout>
  );
}
