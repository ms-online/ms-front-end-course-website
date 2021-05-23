import { Fragment } from 'react'
import Head from 'next/head'
import CourseContent from '../../components/course/course-detail/course-content'
import { getCourseData, getCourseFiles } from '../../lib/course-util'

function CourseDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.course.title}</title>
        <meta name='description' content={props.course.excerpt} />
      </Head>
      <CourseContent course={props.course} />
    </Fragment>
  )
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
