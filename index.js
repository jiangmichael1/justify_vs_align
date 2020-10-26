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

