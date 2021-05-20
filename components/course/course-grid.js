import classes from './course-grid.module.css'
import CourseItem from './course-item'
function CourseGrid(props) {
  const { course } = props
  return (
    <ul className={classes.grid}>
      {course.map((courseItem) => (
        <CourseItem key={courseItem.slug} course={courseItem} />
      ))}
    </ul>
  )
}

export default CourseGrid
