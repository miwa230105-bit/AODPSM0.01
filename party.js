let party = []

function setParty(list){
    party = list
}

function isParty(name){
    return party.includes(name)
}

module.exports = {setParty,isParty}