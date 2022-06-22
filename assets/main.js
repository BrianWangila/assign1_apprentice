function inputName (name){
  const form = document.querySelector("form")
  form.addEventListener("submit", e => {
    e.preventDefault()
    console.log("trial")
    const name = document.querySelector("#name")
    const p = document.createElement("p")
    name.appendChild(p)
    
    p.textContent = `Hello ${e.target.input.value}, welcome to the bootcamp.`


    
  })

}
inputName()