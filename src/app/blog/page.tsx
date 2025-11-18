import styles from './blog.module.css';

const posts = [
  {
    id: 1,
    title: 'Best Parks for Toddlers in Barcelona',
    date: 'Nov 15, 2025',
    excerpt: 'A guide to the safest, most kid-friendly parks with playgrounds and shade.',
  },
  {
    id: 2,
    title: 'Getting Around Barcelona with Kids: Public Transport Tips',
    date: 'Nov 8, 2025',
    excerpt: 'How to navigate the metro, buses, and trains with children.',
  },
  {
    id: 3,
    title: '10 Free Activities for Families in Tarragona',
    date: 'Oct 30, 2025',
    excerpt: 'Budget-friendly ideas to keep your kids entertained.',
  },
];

export default function Blog() {
  return (
    <div className="container">
      <h1>Blog</h1>
      <p className={styles.intro}>Tips, guides, and stories from expat moms in Catalonia.</p>

      <div className={styles.grid}>
        {posts.map(post => (
          <article key={post.id} className={styles.post}>
            <h3>{post.title}</h3>
            <p className={styles.date}>{post.date}</p>
            <p>{post.excerpt}</p>
            <a href="#" className={styles.link}>Read More →</a>
          </article>
        ))}
      </div>
    </div>
  );
}
