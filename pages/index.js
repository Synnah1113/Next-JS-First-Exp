// pages/index.js

import React, { useState } from 'react';
import Image from 'next/image';
import FavoriteMods from '../components/FavoriteMods.js';

export default function Home() {
  const [page, setPage] = useState('home');

  const renderContent = () => {
    if (page === 'home') {
      return (
        <>
          <h2>Welcome to my Minecraft Side</h2>
          <p>I'm going to show you my experience and the stuff I like</p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Image src="/cute1.jpg" alt="Cute Fox" width={300} height={200} />
            <Image src="/cute2.jpg" alt="Cute Baby Panda" width={300} height={200} />
          </div>
        </>
      );
    } else if (page === 'mods') {
      return (
        <>
          <FavoriteMods />
        </>
      );
    } else if (page === 'adventures') {
      return (
        <>
          <h2>My Adventures</h2>
          <ul style={{ textAlign: 'left', maxWidth: '600px', margin: 'auto' }}>
            <li>Find Dungeons and Explore them</li>
            <li>Building an Empire, World or Star</li>
            <li>Survive Alone or Together</li>
          </ul>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <main style={{
      backgroundColor: '#474343',
      color: 'white',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '3rem', color: '#51074a' }}>My first NextJS side</h1>

      <nav style={{ marginBottom: '2rem' }}>
        <button
          onClick={() => setPage('home')}
          style={{
            marginRight: '1rem',
            padding: '1rem',
            backgroundColor: page === 'home' ? '#FFC0CB' : '#333',
            border: 'none',
            color: page === 'home' ? 'black' : 'white',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Introduction
        </button>
        <button
          onClick={() => setPage('mods')}
          style={{
            marginRight: '1rem',
            padding: '1rem',
            backgroundColor: page === 'mods' ? '#FFC0CB' : '#333',
            border: 'none',
            color: page === 'mods' ? 'black' : 'white',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          My fav Mods
        </button>
        <button
          onClick={() => setPage('adventures')}
          style={{
            padding: '1rem',
            backgroundColor: page === 'adventures' ? '#FFC0CB' : '#333',
            border: 'none',
            color: page === 'adventures' ? 'black' : 'white',
            cursor: 'pointer',
            borderRadius: '4px',
          }}
        >
          Adventures in Minecraft
        </button>
      </nav>

      <section>
        {renderContent()}
      </section>

      <footer style={{ marginTop: '3rem' }}>
        <a
          href="https://github.com/Synnah1113"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#8f83d8',
            textDecoration: 'none',
            fontWeight: '900',
          }}
        >
          My Github profile
        </a>
      </footer>
    </main>
  );
}
