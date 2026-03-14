const Cap = require("cap").Cap

const c = new Cap()
const device = Cap.findDevice("0.0.0.0")

const buffer = Buffer.alloc(65535)

c.open(device,"udp",10*1024*1024,buffer)

c.on("packet",(nbytes)=>{
    
    const data = buffer.slice(0,nbytes)

    // TODO parse albion packets

})