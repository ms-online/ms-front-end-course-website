import classes from './hero.module.css'
import Image from 'next/image'
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/hero.png'
          alt='前端系列学习'
          width={300}
          height={300}
        />
      </div>
      <h1>前端学习平台</h1>
      <p>学习编程，改变生活！</p>
    </section>
  )
}

export default Hero
