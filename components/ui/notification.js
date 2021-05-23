import ReactDom from 'react-dom'
import classes from './notification.module.css'

function Notification(props) {
  const { title, message, status } = props

  let statusClass = ''
  if (status === 'success') {
    statusClass = classes.success
  }

  if (status === 'error') {
    statusClass = classes.error
  }

  const cssClasses = `${classes.notification} ${statusClass}`
  return ReactDom.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  )
}

export default Notification
