function calculateParallelogramArea(){
    // Get the base valu of parallelogram
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value;
    const base = parseFloat(parallelogramBaseText);
    console.log(base);

    // Get the value of parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const height = parseFloat(parallelogramHeightText);
    console.log(height);
    
    // Calculate Rectantle Area
    const area = base * height;
    console.log('Area of Parallelogram is:', area);

    // Display the Area of Parallelogram
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;

}