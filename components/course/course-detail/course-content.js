import CourseHeader from './course-header'
import classes from './course-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

function CourseContent(props) {
  const { course } = props
  const imagePath = `/images/course/${course.slug}/${course.image}`

  const customRenderer = {
    img(image) {
      return (
        <Image
          src={`/images/course/${course.slug}/${image.src}`}
          alt={image.alt}
          width={700}
          height={400}
        />
      )
    },
    p(paragraph) {
      const { node } = paragraph

      if (node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <div className={classes.image}>
            <Image
              src={`/images/course/${course.slug}/${image.properties.src}`}
              alt={image.alt}
              width={700}
              height={400}
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },
  }
  return (
    <article className={classes.content}>
      <CourseHeader title={course.title} image={imagePath} />
      <ReactMarkdown components={customRenderer}>
        {course.content}
      </ReactMarkdown>
    </article>
  )
}
export default CourseContent
