'use client';

import { useState } from 'react';
import styles from './explore.module.css';

const itineraries = [
  {
    id: 1,
    title: 'Park Güell & La Salut',
    location: 'Barcelona',
    distance: '2 km',
    duration: '3 hours',
    ageGroup: '2-8 years',
    description: 'Explore the colorful mosaics of Park Güell, then relax at the nearby Salut neighborhood.',
  },
  {
    id: 2,
    title: 'Montserrat Monastery',
    location: 'Montserrat',
    distance: '30 km',
    duration: 'Full day',
    ageGroup: '5+ years',
    description: 'Cable car ride, hiking trails, and stunning mountain views. Perfect for older kids.',
  },
  {
    id: 3,
    title: 'Castelldefels Beach',
    location: 'Castelldefels',
    distance: '20 km',
    duration: '4 hours',
    ageGroup: 'All ages',
    description: 'Sandy beaches, playgrounds, and beachfront restaurants. Great for families.',
  },
  {
    id: 4,
    title: 'Collserola Hills Nature Walk',
    location: 'Barcelona',
    distance: '10 km',
    duration: '2 hours',
    ageGroup: '3+ years',
    description: 'Easy forest trails with picnic spots and nature exploration.',
  },
];

export default function Explore() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? itineraries : itineraries.filter(it => it.ageGroup.includes(filter));

  return (
    <div className="container">
      <h1>Explore Itineraries</h1>
      <p className={styles.intro}>Discover family-friendly day trips and adventures around Catalonia.</p>

      <div className={styles.filters}>
        <button
          className={filter === 'all' ? styles.active : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === '2-8' ? styles.active : ''}
          onClick={() => setFilter('2-8')}
        >
          2-8 Years
        </button>
        <button
          className={filter === '5+' ? styles.active : ''}
          onClick={() => setFilter('5+')}
        >
          5+ Years
        </button>
      </div>

      <div className={styles.grid}>
        {filtered.map(itinerary => (
          <div key={itinerary.id} className={styles.card}>
            <h3>{itinerary.title}</h3>
            <p className={styles.meta}>{itinerary.location} • {itinerary.distance}</p>
            <p className={styles.meta}>Duration: {itinerary.duration}</p>
            <p className={styles.ageGroup}>Age: {itinerary.ageGroup}</p>
            <p>{itinerary.description}</p>
            <button className="btn-primary">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
