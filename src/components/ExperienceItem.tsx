import * as stylex from '@stylexjs/stylex';
import { tokens } from '../app/tokens.stylex';

const styles = stylex.create({
  experience: {
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
  position: {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: tokens.spacingXs,
    color: tokens.textPrimary,
  },
  company: {
    color: tokens.primaryColor,
    marginBottom: tokens.spacingXs,
    fontWeight: '500',
  },
  dateLocation: {
    fontSize: '0.85rem',
    color: tokens.textLight,
    marginBottom: tokens.spacingMd,
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingSm,
  },
  description: {
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: tokens.textSecondary,
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
      <div {...stylex.props(styles.dateLocation)}>
        <span>{dateRange}</span> • <span>{location}</span>
      </div>
      {description && <div {...stylex.props(styles.description)}>{description}</div>}
    </div>
  );
}