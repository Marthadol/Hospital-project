console.log("we are live")

const toggleMenu = () => {
  const navbar = document.getElementById('nav-bar');
navbar.classList.toggle('active');

console.log('we are been clicked')
console.log(navbar)
}

// vaccination

const vaccinationChecker = (age, hasDiseases, familyIncome) => {

  if ((age < 5) && (hasDiseases == 'n') && (familyIncome < 4500)){
    answer.innerHTML = ('Congratulations your Child is eligible for free vaccination <br>Please book an appointment now')
  } else{
    answer.innerHTML = ('Sorry your child is not eligible for free Vaccination')
  }

}


const ageEl = document.querySelector('.age')
const hasDiseaseEl = document.querySelector('.hasDisease')
const familyIncomeEl = document.querySelector('.familyIncome')
const answer = document.getElementById('answer')

const checkButtonEl = document.querySelector('.checkButton')


console.log('the age element: ', ageEl)
console.log('the hasDisease element: ', hasDiseaseEl)
console.log('the familyIncome element: ', familyIncomeEl)
const resultEl = document.querySelector('.www')

checkButtonEl.addEventListener('click', (event)=>{
event.preventDefault()
const age = parseInt(ageEl.value)
const hasDisease = hasDiseaseEl.value
const familyIncome = parseFloat(familyIncomeEl.value)


console.log('the age element: ', typeof age)
console.log('the hasDisease value: ', typeof hasDisease)
console.log('the familyIncome value: ', typeof familyIncome)

const result = vaccinationChecker(age, hasDisease, familyIncome)

console.log('the result is:', result)

})

