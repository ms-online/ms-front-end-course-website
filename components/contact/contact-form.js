import classes from './contact-form.module.css'
function ContactForm() {
  return (
    <section className={classes.contact}>
      <h1>留言板</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>邮箱</label>
            <input type='email' id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>姓名</label>
            <input type='text' id='name' required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>留言</label>
          <textarea id='message' rows='5'></textarea>
        </div>
        <div className={classes.actions}>
          <button>发送</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
