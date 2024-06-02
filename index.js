let myLeads = []

const inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deletebtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) // convert the string back to an array


if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads()
}
function renderLeads() {
    let listItems = ""
    for(let i = 0; i < myLeads.length; i++){
        listItems += "<li><a target = '_blank' href = ' " + myLeads + "'>" + myLeads[i] + "</a></li>"
    }
    ulEl.innerHTML = listItems
}

inputbtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) // save the data in local storage as a string
    renderLeads()
})

deletebtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    renderLeads()
})
