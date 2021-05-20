import Link from 'next/link'
import classes from './main-navigation.module.css'
import Logo from './logo'
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/course'>所有课程</Link>
          </li>
          <li>
            <Link href='/contact'>联系我们</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainNavigation
