
/*
AI Tool Portal
Core Application Script

Responsibilities:

- Render tool catalog
- Connect AI assistant
- Manage UI interactions
*/

const tools = []

function renderTools(){

const container = document.getElementById("tool-list")
container.innerHTML=""

tools.forEach(tool=>{

const div=document.createElement("div")

div.innerHTML=`
<h3>${tool.name}</h3>
<p>${tool.description}</p>
`

container.appendChild(div)

})

}

function addTool(name,description){

tools.push({
name:name,
description:description
})

renderTools()

}
