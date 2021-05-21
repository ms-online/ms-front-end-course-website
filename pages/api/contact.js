function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: '无效输入' })
      return
    }
    const newMessage = {
      email,
      name,
      message,
    }

    //存储在数据库

    console.log(newMessage)

    res.status(201).json({ message: '数据存储成功', message: newMessage })
  }
}

export default handler
