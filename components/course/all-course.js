import classes from './all-course.module.css'
import CourseGrid from './course-grid'
function AllCourse(props) {
  return (
    <section className={classes.course}>
      <h1>所有课程</h1>
      <CourseGrid course={props.course} />
    </section>
  )
}

export default AllCourse
