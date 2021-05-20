import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const courseDirectory = path.join(process.cwd(), 'course')

//读取每个课程内容
function getCourseData(fileName) {
  const filePath = path.join(courseDirectory, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)

  const courseSlug = fileName.replace(/\.md$/, '') //去掉扩展名
  const courseData = {
    slug: courseSlug,
    ...data,
    content,
  }
  return courseData
}

//获取所有课程数据
export function getAllCourse() {
  const courseFile = fs.readdirSync(courseDirectory)
  const allCourse = courseFile.map((courseFileName) => {
    return getCourseData(courseFileName)
  })

  const sortedCourse = allCourse.sort((courseA, courseB) =>
    courseA.date > courseB.date ? -1 : 1
  )

  return sortedCourse
}

//获取特色课程
export function getFeaturedCourse() {
  const allCourse = getAllCourse()
  const featuredCourse = allCourse.filter((courseItem) => courseItem.isFeatured)

  return featuredCourse
}
