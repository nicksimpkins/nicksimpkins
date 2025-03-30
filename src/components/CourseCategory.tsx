import * as stylex from '@stylexjs/stylex';
import { tokens } from '../app/tokens.stylex';
import CourseItem from './CourseItem';

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
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(2, 1fr)',
      '@media (max-width: 768px)': '1fr',
    },
    gap: tokens.spacingMd,
  },
});

interface Course {
  name: string;
  topics?: string;
  date?: string;
}

interface CourseCategoryProps {
  title: string;
  courses: Course[];
}

export default function CourseCategory({ title, courses }: CourseCategoryProps) {
  return (
    <div {...stylex.props(styles.category)}>
      <h3 {...stylex.props(styles.categoryTitle)}>{title}</h3>
      <div {...stylex.props(styles.coursesGrid)}>
        {courses.map((course, index) => (
          <CourseItem 
            key={`${course.name}-${index}`}
            name={course.name} 
            topics={course.topics} 
            date={course.date} 
          />
        ))}
      </div>
    </div>
  );
}