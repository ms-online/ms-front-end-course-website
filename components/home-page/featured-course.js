import CourseGrid from '../course/course-grid'
import classes from './featured-course.module.css'

function FeaturedCourse(props) {
  return (
    <section className={classes.latest}>
      <h2>热门课程</h2>
      {/* 热门课程列表组件 */}
      <CourseGrid course={props.course} />
    </section>
  )
}
export default FeaturedCourse
