let players = {}

function addDamage(name,damage){

    if(!players[name])
        players[name] = 0

    players[name] += damage
}

function getRanking(){

    return Object.entries(players)
        .map(([name,damage])=>({name,dps:damage}))
        .sort((a,b)=>b.dps-a.dps)
}

function reset(){
    players={}
}

module.exports={addDamage,getRanking,reset}