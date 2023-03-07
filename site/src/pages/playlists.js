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
    title: 'its fine', 
    imageUrl: '/img/playlist_img/if.jpg', 
    webURL:'https://open.spotify.com/playlist/4ouvhD5SoObxT6btG87KEh?si=7b686071c6524765', 
    text: 'it wasnt what i said, its how i said it',
  },
  {
    title: 'backroad bops',
    imageUrl: '/img/playlist_img/bops.jpg', 
    webURL:'https://open.spotify.com/playlist/20fkNioGy029umE4pGgnQ8?si=9b699e848efb4fa5',
    text: 'music that makes me feel at home',
  },
  {
    title: 'a new england fall', //label that appears under image
    imageUrl: '/img/playlist_img/nef.jpg', //path to image in static img folder
    webURL:'https://open.spotify.com/playlist/2lfSpSx1kPiuJMicSKwKGq?si=20be3cf161c243f6', //link to corresponding recipe site page
    text: 'sounds like the only reason to live in ct',
  },
   {
    title: 'middle school', 
    imageUrl: '/img/playlist_img/ms.jpg', 
    webURL:'https://open.spotify.com/playlist/0VDc0MIsMTMfa2yruNsu4l?si=c7025ebba86a4d80', 
    text: 'yes, i used to own dc sneakers',
  }, 
  {
    title: 'rap songs i know', 
    imageUrl: '/img/playlist_img/mac1.jpg', 
    webURL:'https://open.spotify.com/playlist/0VDc0MIsMTMfa2yruNsu4l?si=c7025ebba86a4d80', 
    text: 'playlist size doesnt matter',
  },
  {
    title: 'classic rock', 
    imageUrl: '/img/playlist_img/classic.jpg', 
    webURL:'https://open.spotify.com/playlist/0VDc0MIsMTMfa2yruNsu4l?si=c7025ebba86a4d80', 
    text: 'your dads favorite songs',
  }, 

];
 
//function to format and organize the above gallery list info, links text and image to proper url
 function Gal({imageUrl, title, webURL, text}) {
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
      <text>{text}</text>
      </Link>
     
    </div>
  
  );
}

// function that takes the list, as well as other information and prints it to the screen
export default function Gallery() {

  return (
    <Layout>
      <header className={clsx('hero hero--primary', styles.playlistBanner)}>
        <div className="container">
          <h1 className="hero__title">{'playlists'}</h1>
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