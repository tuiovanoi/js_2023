const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = ["estudar para prova", "dormir cedo"]

for (const intemtarefa of tarefas){
const tarefaElement = document.createElement("li")
const tarefaText = document.createTextNode(intemtarefa)

tarefaElement.appendChild(tarefaText)
listElement.appendChild(tarefaElement)
}