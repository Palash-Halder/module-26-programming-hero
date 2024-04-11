function calculateEllipseArea(){
    const major = getInputValueById('ellipse-major');
    const minor = getInputValueById('ellipse-minor');

    const area = 3.14 * major * minor;
    setInnerTextById('ellipse-area', area);
  
}

/*

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
      const element = document.getElementById(elementId);
      element.innerText = area;
}

*/