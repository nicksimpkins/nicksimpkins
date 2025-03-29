import * as stylex from '@stylexjs/stylex';
import SkillBar from './SkillBar';
import { tokens } from '../app/tokens.stylex';

const styles = stylex.create({
  category: {
    marginBottom: tokens.spacingLg,
    padding: tokens.spacingLg,
    backgroundColor: tokens.cardBackground,
    borderRadius: tokens.borderRadius,
    boxShadow: tokens.boxShadow,
    transition: tokens.transition,
  },
  categoryTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: tokens.spacingMd,
    color: tokens.primaryColor,
    borderBottom: `1px solid ${tokens.borderColor}`,
    paddingBottom: tokens.spacingSm,
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(auto-fill, minmax(300px, 1fr))',
      '@media (max-width: 768px)': '1fr',
    },
    gap: tokens.spacingSm,
  },
});

interface Skill {
  name: string;
  level: number;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

export default function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div {...stylex.props(styles.category)}>
      <h3 {...stylex.props(styles.categoryTitle)}>{title}</h3>
      <div {...stylex.props(styles.skillsGrid)}>
        {skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
}