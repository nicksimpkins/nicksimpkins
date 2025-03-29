import * as stylex from '@stylexjs/stylex';
import SkillBar from './SkillBar';

const styles = stylex.create({
  category: {
    marginBottom: '1.5rem',
  },
  categoryTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '0.75rem',
    color: '#0070f3',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '10px',
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