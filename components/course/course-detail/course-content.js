import CourseHeader from './course-header'
import classes from './course-content.module.css'
import ReactMarkdown from 'react-markdown'

function CourseContent(props) {
  const { course } = props
  const imagePath = `/images/course/${course.slug}/${course.image}`
  return (
    <article className={classes.content}>
      <CourseHeader title={course.title} image={imagePath} />
      <ReactMarkdown>{course.content}</ReactMarkdown>
    </article>
  )
}
export default CourseContent
