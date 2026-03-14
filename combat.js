const webhook = require('./webhook')

let players = {}
let lastCombat = Date.now()

function handleEvent(event){

    lastCombat = Date.now()

    if(!players[event.source])
        players[event.source] = {
            damage:0,
            start:event.time
        }

    players[event.source].damage += event.damage
}

setInterval(()=>{

    const now = Date.now()

    if(now - lastCombat > 5000){
        sendRanking()
        reset()
    }

},1000)

function sendRanking(){

    const ranking = Object.entries(players)
        .map(([name,data])=>{

            const duration = (Date.now() - data.start)/1000
            const dps = Math.round(data.damage/duration)

            return {name,dps}

        })
        .sort((a,b)=>b.dps-a.dps)

    webhook.send(ranking)
}

function reset(){
    players = {}
}

module.exports = {handleEvent}

const clipboard = require('clipboardy')

clipboard.writeSync(text)