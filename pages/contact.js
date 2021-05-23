import { Fragment } from 'react'
import Head from 'next/head'
import ContactForm from '../components/contact/contact-form'
function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>联系我们</title>
        <meta name='description' content='发送你的留言' />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactPage
