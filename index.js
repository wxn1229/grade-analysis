


// disable Enter submit
window.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    e.preventDefault()
  }



})


// disable button submit

const allBtn = document.querySelectorAll("button")


allBtn.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault()

  })

})


// change grade color

const allGrade = document.querySelectorAll(".class-grade")

allGrade.forEach(grade => {
  grade.addEventListener("change", e => {
    changeColor(e.target)


  })
})


function changeColor(target) {
  let value = target.value[0]
  if (value === "A") {
    target.style.backgroundColor = "#4ec940"
  } else if (value === "B") {
    target.style.backgroundColor = "#00b0cc"

  } else if (value === "C") {
    target.style.backgroundColor = "#f98b16"
  } else if (value === "D") {
    target.style.backgroundColor = "#f23c97"
  } else if (value === "F") {
    target.style.backgroundColor = "red"
  } else {
    target.style.backgroundColor = "white"
  }

}

// calculate GPA
const allCredit = document.querySelectorAll(".class-credit")

let sum = 0
let creditSum = 0
let gpa

allCredit.forEach(credit => {
  credit.addEventListener("change", () => {
    calGPA()

  })
})
allGrade.forEach(credit => {
  credit.addEventListener("change", () => {
    calGPA()

  })
})



function calGPA() {



}
