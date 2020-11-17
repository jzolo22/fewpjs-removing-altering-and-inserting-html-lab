// // Write your code here!

// let element = document.createElement("div")

// document.body.append(element)

// let ul = document.createElement("ul")

// for (let i = 0; i< 3; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = (i+1).toString()
//     ul.append(li)
// }

// element.append(ul)

// ul.removeChild(ul.querySelector("li:nth-child(2)"))

// element.remove()

document.getElementById("main").remove();

let newHeader = document.createElement("h1")

newHeader.id = "victory"

document.body.append(newHeader)

newHeader.innerText = "YOUR-NAME is the champion"




