const testobject = {
    name: "Matt",
    age: "23",
    hometown: "SP",
    
}
const arrayofobjects = [
    {
    name: "Matt",
    age: "23",
    hometown: "SP",
    
},
{
    name: "James",
    age: "18",
    hometown: "Huntington",
    
},
{
    name: "Mark",
    age: "26",
    hometown: "Houston",
    
}
]
for(var i = 0; i<arrayofobjects.length; i++){
    console.log(arrayofobjects[i].name)

}
for (person of arrayofobjects){
    console.log(person.name)
}
arrayofobjects.forEach((person)=>{
console.log(person.name)
})
var i = 0
while(i < 2){
    console.log(arrayofobjects[i].name)
    i++
}

console.log(testobject.hometown)
const nameinput = document.querySelector("#name")
const emailinput = document.querySelector("#email")
const passwordinput = document.querySelector("#password")
const buttonel= document.querySelector("#submitbutton")
const peoplesection = document.querySelector(".people")


function submitform(event){
    event.preventDefault()
    const peoplearray = JSON.parse(localStorage.getItem("peoplearray"))||[]
    const newperson = {
        name: nameinput.value, 
        email: emailinput.value,
        password: passwordinput.value,
    

    }
    peoplearray.push(newperson)
localStorage.setItem("peoplearray", JSON.stringify(peoplearray))
console.log(peoplearray)
displaypeople(peoplearray)
}

function displaypeople(people){
   let peoplecard= "" 
   for(var i = 0; i < people.length; i++){
    peoplecard+= `
    <div class="card">
    <p>${people[i].name}</p>
    <p>${people[i].email}</p>
    <p>${people[i].password}</p>
    </div>
    
    
    `
    peoplesection.innerHTML = peoplecard
   }
}

buttonel.addEventListener("click", submitform)