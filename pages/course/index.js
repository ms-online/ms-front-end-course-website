import AllCourse from '../../components/course/all-course'
function AllCoursePage() {
  const DUMMY_COURSE = [
    {
      title: '前端全系列课程包',
      image: 'front-end-series.png',
      excerpt: '课程包含20多套前端知识内容,涵盖框架，基础，工具，面试等',
      date: '2021-01-01',
      slug: 'front-end-series',
    },
    {
      title: '前端全系列课程包',
      image: 'front-end-series.png',
      excerpt: '课程包含20多套前端知识内容,涵盖框架，基础，工具，面试等',
      date: '2021-01-01',
      slug: 'front-end-series',
    },
    {
      title: '前端全系列课程包',
      image: 'front-end-series.png',
      excerpt: '课程包含20多套前端知识内容,涵盖框架，基础，工具，面试等',
      date: '2021-01-01',
      slug: 'front-end-series',
    },
    {
      title: '前端全系列课程包',
      image: 'front-end-series.png',
      excerpt: '课程包含20多套前端知识内容,涵盖框架，基础，工具，面试等',
      date: '2021-01-01',
      slug: 'front-end-series',
    },
  ]
  return <AllCourse course={DUMMY_COURSE} />
}

export default AllCoursePage
