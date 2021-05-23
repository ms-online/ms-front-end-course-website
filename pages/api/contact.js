import { MongoClient } from 'mongodb'
async function handler(req, res) {
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
    let client
    try {
      client = await MongoClient.connect(
        'mongodb+srv://nextjs:nextjs123@msonline.menjs.mongodb.net/front-end-course?retryWrites=true&w=majority',
        { useUnifiedTopology: true }
      )
    } catch (error) {
      res.status(500).json({ message: '数据库链接失败！' })
      return
    }

    const db = client.db()
    try {
      const result = await db.collection('message').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: '数据存储失败' })
      return
    }

    client.close()
    res.status(201).json({ message: '数据存储成功', message: newMessage })
  }
}

export default handler
