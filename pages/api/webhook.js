// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendMessage } from "@/utils/telegram"

export default async function handler(req, res) {
  if(req.method=='POST'){
    console.log("Body=", req.body)
    const chatId = req.body.message.chat.id
    const textMsg = req.body.message.text
    const remitente = req.body.message.from.first_name
    console.log("ChatId=", chatId)
    console.log("Text=", textMsg)
    console.log("remitente=", remitente)
    if(textMsg.toLowerCase().includes("perdón")
      || textMsg.toLowerCase().includes("perdon")
      || textMsg.toLowerCase().includes("disculpas")
      || textMsg.toLowerCase().includes("disculpame")
      || textMsg.toLowerCase().includes("disculpa")
      || textMsg.toLowerCase().includes("disculpá"))
      {
        await sendMessage(chatId, `Naa, ta todo bien ñery.`)
    }
  
    if(textMsg.toLowerCase().includes("tu vieja")
      || textMsg.toLowerCase().includes("la tuya")){
        await sendMessage(chatId, `No, especificamente la vieja de ${remitente}. Disculpate conmigo.`)
    }else{
      await sendMessage(chatId, `${textMsg} tu vieja.`)
    }
    res.status(200).send("OK")
  } else{
    res.setHeader('Allow', ['POST'])
    res.status(500).send('Method not allowed')
  }
}
