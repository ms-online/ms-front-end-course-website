import { Fragment } from 'react'
import Head from 'next/head'

import AllCourse from '../../components/course/all-course'
import { getAllCourse } from '../../lib/course-util'

function AllCoursePage(props) {
  return (
    <Fragment>
      <Head>
        <title>所有课程</title>
        <meta name='description' content='前端课程系列' />
      </Head>
      <AllCourse course={props.course} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const allCourse = getAllCourse()
  return {
    props: {
      course: allCourse,
    },
  }
}

export default AllCoursePage
