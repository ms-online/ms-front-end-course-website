import CourseHeader from './course-header'
import classes from './course-content.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

function CourseContent(props) {
  const { course } = props
  const imagePath = `/images/course/${course.slug}/${course.image}`

  const customRenderer = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/course/${course.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={700}
    //       height={400}
    //     />
    //   )
    // },
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
    code(code) {
      const { className, children } = code //language-js
      const language = className.split('-')[1] //js
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      )
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
