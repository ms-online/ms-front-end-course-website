import classes from './course-grid.module.css'
import CourseItem from './course-item'
function CourseGrid(props) {
  const { course } = props
  return (
    <ul className={classes.grid}>
      {course.map((item) => (
        <CourseItem />
      ))}
    </ul>
  )
}

export default CourseGrid
