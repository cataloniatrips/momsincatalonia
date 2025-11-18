import fs from 'fs';
import path from 'path';
import styles from './blog.module.css';

type BlogPost = {
  slug: string;
  title: string;
  location?: string;
  distance?: string;
  duration?: string;
  age?: string;
  summary?: string;
};

function getPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog');

  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const files = fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const match = /^---\n([\s\S]+?)\n---\n?([\s\S]*)$/m.exec(fileContents);
      let frontmatter: Record<string, string> = {};

      if (match) {
        const lines = match[1].split('\n');
        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) continue;
          const [key, ...rest] = trimmed.split(':');
          if (!key) continue;
          const value = rest.join(':').trim().replace(/^"|"$/g, '');
          frontmatter[key.trim()] = value;
        }
      }

      return {
        slug,
        title: frontmatter.title || slug,
        location: frontmatter.location || '',
        distance: frontmatter.distance || '',
        duration: frontmatter.duration || '',
        age: frontmatter.age || '',
        summary: frontmatter.summary || '',
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export default function Blog() {
  const posts = getPosts();

  return (
    <div className="container">
      <h1>Blog</h1>
      <p className={styles.intro}>
        Tips, guides, and itineraries from moms exploring Catalonia with their families.
      </p>

      <div className={styles.grid}>
        {posts.map((post) => {
          const metaLine = [post.location, post.distance]
            .filter(Boolean)
            .join(' • ');

          return (
            <article key={post.slug} className={styles.post}>
              <h3>{post.title}</h3>
              {metaLine && <p className={styles.date}>{metaLine}</p>}
              <p>
                <strong>Duration:</strong> {post.duration || '—'}
                <br />
                <strong>Age:</strong> {post.age || '—'}
              </p>
              {post.summary && <p>{post.summary}</p>}
            </article>
          );
        })}
      </div>
    </div>
  );
}
