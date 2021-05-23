import { useState, useEffect } from 'react'
import classes from './contact-form.module.css'
import Notification from '../ui/notification'
async function sendContactData(contactDetails) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: { 'Content-Type': 'application/json' },
  })

  const data = await response.json()
  if (!response.ok) {
    throw new Error(data.message || '出错了')
  }
}

function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredName, setEnteredName] = useState('')
  const [enteredMessage, setEnteredMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState() //'pending','success','error'
  const [requestError, setRequestError] = useState()

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [requestStatus])

  //可选项：在客户端做一个简单的数据验证

  async function sendMessageHandler(event) {
    event.preventDefault()
    setRequestStatus('pending')
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      })
      setRequestStatus('success')
      setEnteredEmail('')
      setEnteredName('')
      setEnteredMessage('')
    } catch (error) {
      setRequestError(error.message)
      setRequestStatus('error')
    }
  }

  //弹框props
  let notification

  if (requestStatus === 'pending') {
    notification = {
      status: 'pengding',
      title: '发送中',
      message: '你的留言信息正在传送中...',
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: '成功',
      message: '你的留言信息发送成功！',
    }
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: '失败',
      message: requestError,
    }
  }

  return (
    <section className={classes.contact}>
      <h1>留言板</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>邮箱</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>姓名</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>留言</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>发送</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
    </section>
  )
}

export default ContactForm
