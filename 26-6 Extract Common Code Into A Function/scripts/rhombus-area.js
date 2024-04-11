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