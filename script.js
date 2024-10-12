var ul=document.getElementById("container")
var ip=document.getElementById("input")
function add(){
    var listitem=document.createElement("li")
    listitem.innerHTML=ip.value+"<button  class='btn' onclick='deleteItem(event)'>Delete</button>"
    ul.append(listitem)
}
function deleteItem(event){
    event.target.parentElement.remove()
}
