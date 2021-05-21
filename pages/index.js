import { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedCourse from '../components/home-page/featured-course'
import { getFeaturedCourse } from '../lib/course-util'
function HomePage(props) {
  return (
    <Fragment>
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
