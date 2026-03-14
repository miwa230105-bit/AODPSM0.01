const Cap = require('cap').Cap
const parser = require('./parser')
const combat = require('./combat')

const c = new Cap()

const device = Cap.findDevice("0.0.0.0")

const filter = "udp"
const bufSize = 10 * 1024 * 1024
const buffer = Buffer.alloc(65535)

c.open(device, filter, bufSize, buffer)

console.log("Albion DPS Meter Started...")

c.on('packet', function(nbytes) {

    const packet = buffer.slice(0, nbytes)

    const event = parser.parse(packet)

    if(event){
        combat.handleEvent(event)
    }

})