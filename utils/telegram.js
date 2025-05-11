const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.BOT_API_KEY}`
const tunnelUrl = process.env.MOLE_URL

export async function setTunnelURL() {
    const url = `https://api.telegram.org/bot7531607165:AAHYU_LVpTWDiNXoZONOCAPWNd2g5i-aFdQ/setWebhook?url=${tunnelUrl}/api/webhook`
    console.log('setTunnelURL.Init url=', url)

    try {
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                }
            }
        )
        console.log('setTunnelURL response=', response)
        if(!response.ok){
            console.log("Fail send message", await response.text())
        }
    } catch (error) {
        console.error("Error trying send message. Error=", error)
    }
}

export async function sendMessage(chatId, text) {
    const url = `${TELEGRAM_API_URL}/sendMessage`
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text
            })
            }
        )
        if(!response.ok){
            console.log("Fail send message", await response.text())
        }
    } catch (error) {
        console.error("Error trying send message. Error=", error)
    }
}