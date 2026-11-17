// Paragraph Box Transition
// Sayori
const secLogo = document.querySelector(".sprite")
secLogo.addEventListener("mouseenter", () => {
    secLogo.src = "spriteImage/Sayori-2.png"
})
secLogo.addEventListener("mouseleave", () => {
    secLogo.src = "spriteImage/PC _ Computer - Doki Doki Literature Club - Miscellaneous - Stickers.png"
})

// Page 1
const cer = document.querySelector(".cer")
const cerDetail = document.querySelector(".cerDetail")
const cerBox = document.querySelector(".cerBox")

fetch("Data/info.json")
  .then((response) => response.text())
  .then((text) => {
    const Detail = JSON.parse(text)

    for (const adetail of Detail) {
        const tr = document.createElement("tr")
        const img = document.createElement("img")
        
        img.src = `${adetail.CerImage}`
        img.classList.add("cer")

        cerBox.append(img)
    tr.innerHTML = `
    <td>${adetail.Certificate}</td>
    <td>${adetail.Date}</td>
    <td>${adetail.Place}</td>
    
        `
        cerDetail.addEventListener("mouseenter", () => {
    cerDetail.append(tr)
    // cerBox.append(img)
})
cerDetail.addEventListener("mouseleave", () => {
    tr.remove()
    // img.remove()
})
  }
    
    
})

// Page 2
const me = [
    "Mario",
    "15 years",
    "Music",
    "Student",
    "Benjamarachutit Ratchaburi"
]
const myname = document.querySelector("#name")
const age = document.querySelector("#age")
const interest = document.querySelector("#interest")
const occupation = document.querySelector("#occupation")
const school = document.querySelector("#school")

myname.addEventListener("click", () => {
    myname.classList.add("pag")
})
myname.addEventListener("mouseleave", () => {
    myname.classList.remove("pag")
})

age.addEventListener("click", () => {
    age.classList.add("pag")
})
age.addEventListener("mouseleave", () => {
    age.classList.remove("pag")
})

interest.addEventListener("click", () => {
    interest.classList.add("pag")
})
interest.addEventListener("mouseleave", () => {
    interest.classList.remove("pag")
})

occupation.addEventListener("click", () => {
    occupation.classList.add("pag")
})
occupation.addEventListener("mouseleave", () => {
    occupation.classList.remove("pag")
})

school.addEventListener("click", () => {
    school.classList.add("pag")
})
school.addEventListener("mouseleave", () => {
    school.classList.remove("pag")
})

myname.textContent = me[0]
age.textContent = me[1]
interest.textContent = me[2]
occupation.textContent = me[3]
school.textContent = me[4]