import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  skillContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  skillName: {
    width: '120px',
    fontSize: '0.9rem',
  },
  skillBar: {
    display: 'flex',
    gap: '5px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
  },
  filledDot: {
    backgroundColor: '#0070f3',
  },
  emptyDot: {
    backgroundColor: '#e0e0e0',
  },
});

interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  const dots = [];
  for (let i = 1; i <= 5; i++) {
    dots.push(
      <div
        key={i}
        {...stylex.props(
          styles.dot,
          i <= level ? styles.filledDot : styles.emptyDot
        )}
      />
    );
  }

  return (
    <div {...stylex.props(styles.skillContainer)}>
      <span {...stylex.props(styles.skillName)}>{skill}</span>
      <div {...stylex.props(styles.skillBar)}>{dots}</div>
    </div>
  );
}