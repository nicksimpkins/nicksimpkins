import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  project: {
    marginBottom: '1.5rem',
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  description: {
    marginBottom: '0.5rem',
  },
  tech: {
    fontSize: '0.9rem',
    color: '#666',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  },
});

interface ProjectItemProps {
  name: string;
  description: string;
  technologies: string;
  link?: string;
}

export default function ProjectItem({ name, description, technologies, link }: ProjectItemProps) {
  return (
    <div {...stylex.props(styles.project)}>
      <div {...stylex.props(styles.name)}>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" {...stylex.props(styles.link)}>
            {name}
          </a>
        ) : (
          name
        )}
      </div>
      <div {...stylex.props(styles.description)}>{description}</div>
      <div {...stylex.props(styles.tech)}>Technologies: {technologies}</div>
    </div>
  );
}