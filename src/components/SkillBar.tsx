import * as stylex from '@stylexjs/stylex';
import { tokens } from '../app/tokens.stylex';

const styles = stylex.create({
  skillContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: tokens.spacingSm,
    padding: tokens.spacingSm,
    borderRadius: tokens.borderRadius,
    backgroundColor: tokens.cardBackground,
    transition: tokens.transition,
    ':hover': {
      backgroundColor: tokens.backgroundAlt,
    },
  },
  skillName: {
    minWidth: '120px',
    fontSize: '0.9rem',
    color: tokens.textPrimary,
    fontWeight: '500',
  },
  skillBar: {
    display: 'flex',
    flex: 1,
    height: '6px',
    backgroundColor: tokens.skillEmpty,
    borderRadius: '3px',
    overflow: 'hidden',
  },
  skillLevel: {
    height: '100%',
    backgroundColor: tokens.skillFilled,
    borderRadius: '3px',
    transition: 'width 0.5s ease-in-out',
  },
});

interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  const percentage = (level / 5) * 100;
  
  return (
    <div {...stylex.props(styles.skillContainer)}>
      <span {...stylex.props(styles.skillName)}>{skill}</span>
      <div {...stylex.props(styles.skillBar)}>
        <div 
          {...stylex.props(styles.skillLevel)} 
          style={{ width: `${percentage}%` }} 
        />
      </div>
    </div>
  );
}