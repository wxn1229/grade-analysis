


// disable Enter submit
window.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    e.preventDefault()
  }



})


// disable button submit
function defaultBtn() {
  let allBtn = document.querySelectorAll("button")


  allBtn.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault()

    })

  })


}

defaultBtn()



// change grade color
function colorEvent() {
  let allGrade = document.querySelectorAll(".class-grade")

  allGrade.forEach(grade => {
    grade.addEventListener("change", e => {
      changeColor(e.target)


    })
  })


}

colorEvent()

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
//
function formAddEvent() {
  let allCredit = document.querySelectorAll(".class-credit")
  allGrade = document.querySelectorAll(".class-grade")
  console.log("allCredit: " + allCredit)
  console.log("allGrade: " + allGrade)

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

}

formAddEvent()



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

let addbtn = document.querySelector(".add-btn")

const formTemplate = `<form action="">
          <input 
            type="text"
            placeholder = "class category"
            class = "class-type"
            list = "class-list"
          >
          <input 
            type="text"
            placeholder = " class number"
            class = "class-number"
          >
          <input 
            type="number"
            placeholder = "credits"
            min = "0"
            max = "6"
            class = "class-credit"
          >

          <input 
            type="text" 
            placeholder = "grade" 
            class = "class-grade"
            list = "grade-list"

            
          >
          
          <button class="trash">
            <i class="fas fa-trash"></i>
          </button>

         

        </form>`

addbtn.addEventListener("click", () => {
  addform()

})



function removeFromEvent() {
  let trashes = document.querySelectorAll(".trash")
  trashes.forEach(trash => {
    trash.addEventListener("click", () => {
      //console.log(trash.parentElement)
      let form = trash.parentElement
      form.addEventListener("animationend", () => {
        form.remove()
      })

      form.style.animation = "scaleDown 0.3s ease forwards"

      calGPA()

    })
  })
}
removeFromEvent()


function addform() {

  let block = document.querySelector(".input-block")
  block.insertAdjacentHTML("beforeend", formTemplate)
  let forms = document.querySelectorAll("form")
  forms[forms.length - 1].style.animation = "scaleUp 0.3s ease forwards"
  formAddEvent()
  defaultBtn()
  colorEvent()
  removeFromEvent()

}


function sortUp() {
  let upBtn = document.querySelector(".up-btn")

  upBtn.addEventListener("click", () => {
    let forms = document.querySelectorAll("form")
    let formsArr = Array.from(forms)
    let inputBlock = document.querySelector(".input-block")
    //    console.log(formsArr)
    //    formsArr.forEach(form => {
    //      console.log(form[3].value)
    //    })
    formsArr.sort((a, b) => gradeTransform(a[3].value) - gradeTransform(b[3].value))
    //    console.log(formsArr)
    //    formsArr.forEach(form => {
    //      console.log(form[3].value)
    //    })
    forms.forEach(form => {
      form.remove()
    })

    formsArr.forEach(form => {
      form.style.animation = "none"
      inputBlock.appendChild(form)
    })

  })


}

sortUp()

function sortDown() {
  let downBtn = document.querySelector(".down-btn")

  downBtn.addEventListener("click", () => {
    let forms = document.querySelectorAll("form")
    let formsArr = Array.from(forms)
    let inputBlock = document.querySelector(".input-block")
    //    console.log(formsArr)
    //    formsArr.forEach(form => {
    //      console.log(form[3].value)
    //    })
    formsArr.sort((a, b) => gradeTransform(b[3].value) - gradeTransform(a[3].value))
    //    console.log(formsArr)
    //    formsArr.forEach(form => {
    //      console.log(form[3].value)
    //    })
    forms.forEach(form => {
      form.remove()
    })

    formsArr.forEach(form => {
      form.style.animation = "none"
      inputBlock.appendChild(form)
    })

  })


}

sortDown()
