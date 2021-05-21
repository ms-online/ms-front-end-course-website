import CourseContent from '../../components/course/course-detail/course-content'
import { getCourseData, getCourseFiles } from '../../lib/course-util'

function CourseDetailPage(props) {
  return <CourseContent course={props.course} />
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const courseData = getCourseData(slug)

  return {
    props: {
      course: courseData,
    },
    revalidate: 600,
  }
}

export async function getStaticPaths() {
  const courseFilenames = getCourseFiles()

  const slugs = courseFilenames.map((filename) => filename.replace(/\.md$/, ''))
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export default CourseDetailPage
