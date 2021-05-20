import CourseHeader from './course-header'
import classes from './course-content.module.css'
import ReactMarkdown from 'react-markdown'

function CourseContent() {
  const DUMMY_COURSEItem = {
    title: '前端全系列课程包',
    image: 'front-end-series.png',
    excerpt: '课程包含20多套前端知识内容,涵盖框架，基础，工具，面试等',
    date: '2021-01-01',
    content: '# 这是第一个课程内容',
    slug: 'front-end-series',
  }
  const imagePath = `/images/course/${DUMMY_COURSEItem.slug}/${DUMMY_COURSEItem.image}`
  return (
    <article className={classes.content}>
      <CourseHeader title={DUMMY_COURSEItem.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_COURSEItem.content}</ReactMarkdown>
    </article>
  )
}
export default CourseContent
