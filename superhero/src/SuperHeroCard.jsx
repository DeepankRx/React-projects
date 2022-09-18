import React from 'react';
import styles from './SuperHeroCard.module.css';
const SuperHeroCard = (props) => {
  const { appearance, biography, connections, images, name, powerstats, work } =
    props.superHero;
  //appearance is an object with keys like eyeColor, gender, hairColor,array height, weight array
  //biography is an object with keys like aliases, alignment, alterEgos, firstAppearance, fullName, placeOfBirth, publisher
  //connections is an object with keys like groupAffiliation, relatives
  //id is a string
  //images is an object with keys like lg, md, sm, xs
  //name is a string
  //powerstats is an object with keys like combat, durability, intelligence, power, speed, strength
  //work is an object with keys like base, occupation
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={images.lg} alt={name} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.name}>
          <h1>{name}</h1>
        </div>
        <div className={styles.biography}>
          <h2>Biography</h2>
          <p>
            <span>Full Name:</span> {biography.fullName}
          </p>
          <p>
            <span>Place of Birth:</span> {biography.placeOfBirth}
          </p>
          <p>
            <span>First Appearance:</span> {biography.firstAppearance}
          </p>
          <p>
            <span>Publisher:</span> {biography.publisher}
          </p>
          <p>
            <span>Alignment:</span> {biography.alignment}
          </p>
        </div>
        <div className={styles.appearance}>
          <h2>Appearance</h2>
          <p>
            <span>Gender :</span> {appearance.gender}
          </p>
          <p>
            <span>Eye Color :</span> {appearance.eyeColor}
          </p>
          <p>
            <span>Hair Color :</span> {appearance.hairColor}
          </p>
          <p>
            <span>Height :</span> {appearance.height[0]}
          </p>
          <p>
            <span>Weight :</span> {appearance.weight[0]}
          </p>
          <p>
            <span>Race :</span> {appearance.race}
          </p>
        </div>
        <div className={styles.powerstats}>
          <h2>PowerStats</h2>
          <p>
            <span>Combat :</span> {powerstats.combat}
          </p>
          <p>
            <span>Durability :</span> {powerstats.durability}
          </p>
          <p>
            <span>Intelligence :</span> {powerstats.intelligence}
          </p>
          <p>
            <span>Power :</span> {powerstats.power}
          </p>
          <p>
            <span>Speed :</span> {powerstats.speed}
          </p>
          <p>
            <span>Strength :</span> {powerstats.strength}
          </p>
        </div>
        <div className={styles.work}>
          <h2>Work</h2>
          <p>
            <span>Occupation :</span> {work.occupation}
          </p>
          <p>
            <span>Base :</span> {work.base}
          </p>
        </div>
        <div className={styles.connections}>
          <h2>Connections</h2>
          <p>
            <span>Group Affiliation :</span> {connections.groupAffiliation}
          </p>
          <p>
            <span>Relatives :</span> {connections.relatives}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperHeroCard;
