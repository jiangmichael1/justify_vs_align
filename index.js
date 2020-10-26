// CSS Properties Functionality

const justifyList = document.querySelector('.justify-list')
const alignList = document.querySelector('.align-list')

const justifyContentProp = document.querySelector('#justify-content')
const justifyItemsProp = document.querySelector('#justify-items')
const justifySelfProp = document.querySelector('#justify-self')

const alignContentProp = document.querySelector('#align-content')
const alignItemsProp = document.querySelector('#align-items')
const alignSelfProp = document.querySelector('#align-self')

const parentBox = document.querySelector('.parent')
const childBox = document.querySelector('.child')

justifyList.addEventListener('click', e => {
    if (e.target === justifyContentProp) {
        console.log("Justify content clicked")
    } else if (e.target === justifyItemsProp) {
        console.log("Justify items clicked")
    } else if (e.target === justifySelfProp) {
        console.log("Justify self clicked")
    } else {
        console.log(e.target)
    }

})



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

