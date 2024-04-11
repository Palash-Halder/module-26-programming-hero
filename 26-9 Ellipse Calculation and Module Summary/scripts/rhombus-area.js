/*
function calculateRhombusArea(){
    const dimension = getRhombusDimension();
    console.log(dimension);
}

function getRhombusDimension() {
    const dimensionInput = document.getElementById('dimension');
    const dimentionText = dimensionInput.value;
    const dimension = parseFloat(dimentionText);
    return dimension;
}

*/



function calculateRhombusArea(){
    const dimension1 = getInputValueById('rhombus-dim1');
    //console.log('base value', dimention1);

    const dimension2 = getInputValueById('rhombus-dim2');

    const area = 0.5 * dimension1 * dimension2;
    console.log('area of the rhombus is ', area);

    setInnerTextById('rhombus-area', area);

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}




