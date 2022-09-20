import React, { useState } from 'react';
import styles from './App.module.css';
import axios from 'axios';
import SuperHeroCard from './SuperHeroCard';
const App = () => {
  const [superHero, setSuperHero] = useState(null);
  const [superHeroName, setSuperHeroName] = useState('');
  const [loading, setLoading] = useState(false);
  const options = {
    method: 'GET',
    url: 'https://superhero-search.p.rapidapi.com/api/',
    params: { hero: superHeroName },
    headers: {
      'X-RapidAPI-Key': '108d301970msh68dbe6d39fbf202p1139ddjsn6eb50b9aa735',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };
  const fetchSuperHero = async () => {
    if (superHeroName.length <= 0) {
      alert('Please enter a valid name');
      return;
    }
    setLoading(true);
    const response = await axios.get(options.url, options);
    setLoading(false);
    if (response.data === 'Hero Not Found') {
      alert('Hero not found');
      return;
    }

    setSuperHero(response.data);
    setSuperHeroName('');
  };
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src="logo.png" alt="Company logo" />
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <a href="https://www.instagram.com/deepank_rx/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/DeepankRx">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/deepank-pushpad-747664188/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Search Superhero"
          onChange={(e) => setSuperHeroName(e.target.value)}
        />
        <button
          onClick={() => {
            fetchSuperHero();
          }}
        >
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>
      {superHero && <SuperHeroCard superHero={superHero} />}
    </div>
  );
};

export default App;
