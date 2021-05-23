import { Fragment } from 'react'
import Head from 'next/head'
import Hero from '../components/home-page/hero'
import FeaturedCourse from '../components/home-page/featured-course'
import { getFeaturedCourse } from '../lib/course-util'
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>老吴与小仙</title>
        <meta name='description' content='欢迎来到前端学习平台' />
      </Head>
      <Hero />
      <FeaturedCourse course={props.course} />
    </Fragment>
  )
}

export async function getStaticProps() {
  const featuredCourse = getFeaturedCourse()
  return {
    props: {
      course: featuredCourse,
    },
  }
}

export default HomePage
