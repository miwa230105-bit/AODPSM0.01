module.exports.parse = function(packet){

    try{

        const text = packet.toString()

        if(!text.includes("damage"))
            return null

        const data = JSON.parse(text)

        return {
            source: data.Source,
            target: data.Target,
            damage: data.Damage,
            time: Date.now()
        }

    }catch(e){
        return null
    }

}