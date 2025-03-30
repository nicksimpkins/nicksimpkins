import * as stylex from '@stylexjs/stylex';
import { tokens } from '../app/tokens.stylex';

const styles = stylex.create({
  course: {
    marginBottom: tokens.spacingSm,
    padding: tokens.spacingMd,
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
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: tokens.spacingXs,
    color: tokens.textPrimary,
  },

  topics: {
    fontSize: '0.85rem',
    color: tokens.textLight,
    padding: tokens.spacingXs,
    backgroundColor: tokens.backgroundAlt,
    borderRadius: tokens.borderRadius,
    display: 'inline-block',
  },
  date: {
    fontSize: '0.8rem',
    color: tokens.textLight,
    marginTop: tokens.spacingSm,
    fontStyle: 'italic',
  },
});

interface CourseItemProps {
  name: string;
  topics?: string;
  date?: string;
}

export default function CourseItem({ name, topics, date }: CourseItemProps) {
  return (
    <div {...stylex.props(styles.course)}>
      <div {...stylex.props(styles.name)}>{name}</div>
      {topics && <div {...stylex.props(styles.topics)}>Topics: {topics}</div>}
      {date && <div {...stylex.props(styles.date)}>{date}</div>}
    </div>
  );
}