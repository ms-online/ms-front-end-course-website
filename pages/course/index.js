import AllCourse from '../../components/course/all-course'
import { getAllCourse } from '../../lib/course-util'
function AllCoursePage(props) {
  return <AllCourse course={props.course} />
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
