import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';


// List of all pictures that will appear in the gallery section
const gals = [
  {
    title: 'A New England Fall', //label that appears under image
     imageUrl: '/img/docusaurus.png', //path to image in static img folder
   // imageUrl: '/img/gallery/sugar-cookies.jpg', //path to image in static img folder
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/sugar-cookies/', //link to corresponding recipe site page
  },
  {
    title: 'Backroad Bops',
    imageUrl: '/img/docusaurus.png', //path to image in static img folder
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/gingerbread-cookies/',
  },
  {
    title: 'Middle School', //label that appears under image
     imageUrl: '/img/docusaurus.png', //path to image in static img folder
   // imageUrl: '/img/gallery/sugar-cookies.jpg', //path to image in static img folder
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/sugar-cookies/', //link to corresponding recipe site page
  },
  {
    title: 'Sad Songs',
    imageUrl: '/img/docusaurus.png', //path to image in static img folder
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/gingerbread-cookies/',
  },
  {
    title: 'Driving',
    imageUrl: '/img/docusaurus.png', //path to image in static img folder
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/gingerbread-cookies/',
  },
  {
    title: 'Christmas',
    imageUrl: '/img/docusaurus.png', //path to image in static img folder
    webURL:'https://betty-cracker-recipes.github.io/BC-Recipes/docs/dessert-bar/gingerbread-cookies/',
  },
];
 
//function to format and organize the above gallery list info, links text and image to proper url
 function Gal({imageUrl, title, webURL}) {
  const imgUrl = useBaseUrl(imageUrl); //allows image path to be used
  return (
    <div className={clsx('col col--4', styles.gals)}> 
      <Link to={webURL}>
      {imgUrl && (
          <div className="text--center">
            <img className={styles.featureGal} src={imgUrl} alt={title} />
          </div>
      )}
      <h3>{title}</h3>
      </Link>
    </div>
  );
}

// function that takes the list, as well as other information and prints it to the screen
export default function Gallery() {

  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{'Playlists'}</h1>
        </div>
      </header>
   
      <main>
        {gals && gals.length > 0 && (
          <section className={styles.gals}>
            <div className="container">
               {/* Displays gallery images from list */}
              <div style={{alignItems: 'center', justifyContent: 'space-evenly'}} className="row">
                {gals.map((props, idx) => (
                  <Gal key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}