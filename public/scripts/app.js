// menu

function MenuItem(text, onclick) {
  let element = document.createElement('li');
  element.textContent = text
  element.onclick = () => onclick(text.toLowerCase())
  return element
}

function Menu(names, onclick) {
  let target = document.getElementById("MAIN_MENU").parentElement

  for (let name of names) {
    target.append(new MenuItem(name, onclick))
  }
}

// home page

let pages = new Map()
let templates = document.getElementById("TEMPLATES")
pages.set("home", templates.querySelector("#HOME"))
pages.set("contacts", templates.querySelector("#CONTACTS"))

// assembly

let contentArea = document.getElementById("CONTENT").parentElement
let currentPage = pages.get("home")
contentArea.appendChild(currentPage)

Menu(["Home", "Documentation", "Contacts"], pageName => {

  if (pageName === "documentation") {
    window.location.href = "./docs.html"
    return
  }

  var page = pages.get(pageName)
  if (page) {
    if (currentPage)
      contentArea.removeChild(currentPage)

    contentArea.appendChild(page)
    currentPage = page
  }
})
