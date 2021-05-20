import Link from 'next/link'
import Image from 'next/image'
import classes from './course-item.module.css'
function CourseItem(props) {
  const { title, image, excerpt, date, slug } = props.course
  const imagePath = `/images/course/${slug}/${image}`
  const formattedDate = new Date(date).toLocaleDateString('zn-CH', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <li className={classes.course}>
      <Link>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
export default CourseItem
