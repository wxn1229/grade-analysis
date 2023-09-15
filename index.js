


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

let allGrade = document.querySelectorAll(".class-grade")

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
let allCredit = document.querySelectorAll(".class-credit")

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
  let sum = 0
  let creditSum = 0


  let gpa = 0
  //console.log("calGPA")

  allCredit = document.querySelectorAll(".class-credit")
  allGrade = document.querySelectorAll(".class-grade")
  let gpaText = document.querySelector("#gpa")

  allCredit.forEach((credit, index) => {
    //console.log(allGrade[index].value)

    if (credit.value) {

      creditSum += parseFloat(credit.value)

      sum += gradeTransform(allGrade[index].value) * parseFloat(credit.value)
    }




    //sum = 1 * 0
    //console.log("creditSum: " + creditSum)
    //console.log("sum: " + sum)
    //console.log("credit: " + parseFloat(credit.value))
    //console.log("grade: " + gradeTransform(allGrade[index].value))
  })

  if (creditSum) {

    gpa = sum / creditSum
  }



  gpaText.innerText = gpa.toFixed(2)







}


function gradeTransform(grade) {
  let result = 0;

  if (grade === "A+") {
    result = 4.0;
  }
  else if (grade === "A") {
    result = 4.0;
  }
  else if (grade === "A-") {
    result = 3.7;
  }
  else if (grade === "B+") {
    result = 3.3;
  }
  else if (grade === "B") {
    result = 3.0;
  }
  else if (grade === "B-") {
    result = 2.7;
  }
  else if (grade === "C+") {
    result = 2.3;
  }
  else if (grade === "C") {
    result = 2.0;
  }
  else if (grade === "C-") {
    result = 1.7;
  }
  else if (grade === "D+") {
    result = 1.3;
  }
  else if (grade === "D") {
    result = 1.0;
  }
  else if (grade === "D-") {
    result = 0.7;
  }
  else if (grade === "F") {
    result = 0.0;
  }
  else {
    result = 0;
  }
  // 添加其他成绩的条件

  return result;
}
