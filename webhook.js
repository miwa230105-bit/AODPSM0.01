const axios = require('axios')

const WEBHOOK = "PUT_WEBHOOK_URL"

module.exports.send = async function(ranking){

    let text = "🔥 Albion DPS Ranking\n\n"

    ranking.forEach((p,i)=>{
        text += `${i+1}. ${p.name} - ${p.dps} DPS\n`
    })

    await axios.post(WEBHOOK,{
        content:text
    })

}