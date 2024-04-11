function calculateRectangleArea() {
    // Get Rectangle Length Value
    const rectangleLenthInput = document.getElementById('rectangle-length');
    const rectangleLengthText = rectangleLenthInput.value;
    const length = parseFloat(rectangleLengthText);
    console.log(length);

    // Get Rectangle Width Value
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText);
    console.log(width);

    // Calculate Rectangle Area
    const area = length * width;
    console.log('Area of Rectangle is:', area);

    // Display Ractangle Area
   const rectangleAreaSpan = document.getElementById('rectangle-area');
   rectangleAreaSpan.innerText = area;
}