// CSS Properties Functionality

const justifyList = document.querySelector('.justify-list')
const alignList = document.querySelector('.align-list')

const justifyContent = document.querySelector('#justify-content')
const justifyItems = document.querySelector('#justify-items')
const justifySelf = document.querySelector('#justify-self')

const alignContent = document.querySelector('#align-content')
const alignItems = document.querySelector('#align-items')
const alignSelf = document.querySelector('#align-self')


// Toggling Axis Display

const axisCheck = document.querySelector('#axis') 
const mainAxis = document.querySelector('.main-axis')
const crossAxis = document.querySelector('.cross-axis')

axisCheck.addEventListener('change', function() {
    if (axisCheck.checked){
        mainAxis.style.display = 'block'
        crossAxis.style.display = 'block'
    } else {
        mainAxis.style.display = 'none'
        crossAxis.style.display = 'none'
    }
})

