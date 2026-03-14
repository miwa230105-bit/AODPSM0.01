const list = document.getElementById("dpsList")

function update(players){

    list.innerHTML = ""

    players.forEach(p=>{
        const li = document.createElement("li")
        li.innerText = `${p.name} - ${p.dps} DPS`
        list.appendChild(li)
    })
}