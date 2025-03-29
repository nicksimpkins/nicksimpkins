import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  experience: {
    marginBottom: '1.5rem',
  },
  position: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  company: {
    color: '#444',
    marginBottom: '0.25rem',
  },
  dateLocation: {
    fontSize: '0.9rem',
    color: '#666',
    marginBottom: '0.5rem',
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
});

interface ExperienceItemProps {
  position: string;
  company: string;
  dateRange: string;
  location: string;
  description?: string;
}

export default function ExperienceItem({ position, company, dateRange, location, description }: ExperienceItemProps) {
  return (
    <div {...stylex.props(styles.experience)}>
      <div {...stylex.props(styles.position)}>{position}</div>
      <div {...stylex.props(styles.company)}>{company}</div>
      <div {...stylex.props(styles.dateLocation)}>{dateRange}, {location}</div>
      {description && <div {...stylex.props(styles.description)}>{description}</div>}
    </div>
  );
}