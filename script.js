about = () => {
    about = document.getElementById("about")
    projects = document.getElementById("projects")
    // contact = document.getElementById("contact")
    projects.classList.remove("d-none")
    projects.classList.add("d-block")
    // contact.classList.remove("d-block")
    // contact.classList.add("d-none")
    about.classList.remove("d-none")
    about.classList.add("d-block")
}

AOS.init();