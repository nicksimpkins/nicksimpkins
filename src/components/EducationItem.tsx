import * as stylex from '@stylexjs/stylex';
import { tokens } from '../app/tokens.stylex';

const styles = stylex.create({
  education: {
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
  degree: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: tokens.spacingXs,
    color: tokens.textPrimary,
  },
  institution: {
    color: tokens.primaryColor,
    marginBottom: tokens.spacingXs,
    fontWeight: '500',
  },
  dateLocation: {
    fontSize: '0.85rem',
    color: tokens.textLight,
    marginBottom: tokens.spacingSm,
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingSm,
  },
  minor: {
    fontSize: '0.9rem',
    color: tokens.textSecondary,
    fontStyle: 'italic',
  },
});

interface EducationItemProps {
  degree: string;
  institution: string;
  dateRange: string;
  location: string;
  minor?: string;
}

export default function EducationItem({ degree, institution, dateRange, location, minor }: EducationItemProps) {
  return (
    <div {...stylex.props(styles.education)}>
      <div {...stylex.props(styles.degree)}>{degree}</div>
      <div {...stylex.props(styles.institution)}>{institution}</div>
      <div {...stylex.props(styles.dateLocation)}>
        <span>{dateRange}</span> • <span>{location}</span>
      </div>
      {minor && <div {...stylex.props(styles.minor)}>{minor}</div>}
    </div>
  );
}