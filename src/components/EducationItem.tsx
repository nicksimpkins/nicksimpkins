import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  education: {
    marginBottom: '1.5rem',
  },
  degree: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  institution: {
    color: '#444',
    marginBottom: '0.25rem',
  },
  dateLocation: {
    fontSize: '0.9rem',
    color: '#666',
  },
});

interface EducationItemProps {
  degree: string;
  institution: string;
  dateRange: string;
  location: string;
}

export default function EducationItem({ degree, institution, dateRange, location }: EducationItemProps) {
  return (
    <div {...stylex.props(styles.education)}>
      <div {...stylex.props(styles.degree)}>{degree}</div>
      <div {...stylex.props(styles.institution)}>{institution}</div>
      <div {...stylex.props(styles.dateLocation)}>{dateRange}, {location}</div>
    </div>
  );
}