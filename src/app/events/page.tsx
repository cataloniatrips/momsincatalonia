import styles from './events.module.css';

const events = [
  {
    id: 1,
    title: 'Park Playdate - Montjuïc',
    date: 'Nov 25, 2025',
    time: '10:00 AM',
    location: 'Montjuïc Park, Barcelona',
    description: 'Weekly mom & kids playdate. Bring snacks!',
  },
  {
    id: 2,
    title: 'Beach Day - Sitges',
    date: 'Dec 1, 2025',
    time: '9:00 AM',
    location: 'Sitges Beach',
    description: 'Full day beach outing with picnic. All ages welcome.',
  },
  {
    id: 3,
    title: 'Crafts & Coffee - Local Studio',
    date: 'Nov 30, 2025',
    time: '2:00 PM',
    location: 'Gràcia District, Barcelona',
    description: 'DIY craft workshop while kids play. Adults only.',
  },
];

export default function Events() {
  return (
    <div className="container">
      <h1>Upcoming Events</h1>
      <p className={styles.intro}>Join our community for meetups, playdates, and family events.</p>

      <div className={styles.list}>
        {events.map(event => (
          <div key={event.id} className={styles.event}>
            <div className={styles.date}>
              <span className={styles.day}>{event.date.split(',')[0]}</span>
              <span className={styles.time}>{event.time}</span>
            </div>
            <div className={styles.details}>
              <h3>{event.title}</h3>
              <p className={styles.location}>📍 {event.location}</p>
              <p>{event.description}</p>
              <button className="btn-primary">RSVP</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
