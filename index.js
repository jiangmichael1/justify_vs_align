// Grabbing objects 

const justifyList = document.querySelector('.justify-list');
const alignList = document.querySelector('.align-list');

const parentRadio = document.querySelector('#parent-radio');
const childRadio = document.querySelector('#child-radio');

const justifyContentProp = document.querySelector('#justify-content');
const justifyItemsProp = document.querySelector('#justify-items');
const justifySelfProp = document.querySelector('#justify-self');

const alignContentProp = document.querySelector('#align-content');
const alignItemsProp = document.querySelector('#align-items');
const alignSelfProp = document.querySelector('#align-self');

const flexStartProp = document.querySelector('#flex-start');
const centerProp = document.querySelector('#center');
const flexEndProp = document.querySelector('#flex-end');

const spaceAroundProp = document.querySelector('#space-around');
const spaceBetweenProp = document.querySelector('#space-between');
const spaceEvenlyProp = document.querySelector('#space-evenly');

const navDiv = document.querySelector('.nav');

const parentBox = document.querySelector('.parent');
const childBox = document.querySelector('.child');


// Toggling Axis Display

const axisCheck = document.querySelector('#axis') ;
const mainAxis = document.querySelector('.main-axis');
const crossAxis = document.querySelector('.cross-axis');

axisCheck.addEventListener('change', function() {
    if (!axisCheck.checked){
        mainAxis.style.display = 'none';
        crossAxis.style.display = 'none';
    } else {
        mainAxis.style.display = 'block';
        crossAxis.style.display = 'block';
    }
})

navDiv.addEventListener('click', (e) => {
    if (e.target === flexStartProp){
        flexStartProp.className = "active-btn"
    }
})



