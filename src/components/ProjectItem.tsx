import * as stylex from '@stylexjs/stylex';
import { tokens } from '../app/tokens.stylex';

const styles = stylex.create({
  project: {
    marginBottom: tokens.spacingLg,
    padding: tokens.spacingLg,
    backgroundColor: tokens.cardBackground,
    borderRadius: tokens.borderRadius,
    boxShadow: tokens.boxShadow,
    transition: tokens.transition,
    border: `1px solid ${tokens.borderColor}`,
    ':hover': {
      boxShadow: tokens.boxShadowMd,
      transform: 'translateY(-2px)',
    },
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: tokens.spacingXs,
    color: tokens.textPrimary,
  },
  description: {
    marginBottom: tokens.spacingSm,
    color: tokens.textSecondary,
  },
  tech: {
    fontSize: '0.85rem',
    color: tokens.textLight,
    padding: tokens.spacingXs,
    backgroundColor: tokens.backgroundAlt,
    borderRadius: tokens.borderRadius,
    display: 'inline-block',
  },
  link: {
    color: tokens.primaryColor,
    textDecoration: 'none',
    transition: tokens.transition,
    ':hover': {
      textDecoration: 'underline',
    },
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
            {name} →
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