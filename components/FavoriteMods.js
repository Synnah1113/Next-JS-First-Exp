// components/FavoriteMods.js

import React from 'react';
import Image from 'next/image';
import styles from './FavoriteMods.module.css';

const FavoriteMods = () => {
  return (
    <div>
      <h2 className={styles.heading}>My Fav Mods</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.text}>
            <b>Horror:</b> Horror Mods, machen das Minecraft schaurig und grueslig.
          </div>
          <Image src="/horror.jpg" alt="Dweller Logo" width={150} height={150} />
        </li>
        <li className={styles.item}>
          <div className={styles.text}>
            <b>Mekanism:</b> Einer meiner Lieblings Technologie Mods
          </div>
          <Image src="/mekanism.jpg" alt="Mekanism Logo" width={150} height={150} />
        </li>
        <li className={styles.item}>
          <div className={styles.text}>
            <b>Biomes We've Gone:</b> Einer der schönsten Biom Mods die ich kenne.
          </div>
          <Image src="/biomwevegone.jpg" alt="Biomes We've Gone" width={150} height={150} />
        </li>
      </ul>
    </div>
  );
};

export default FavoriteMods;

