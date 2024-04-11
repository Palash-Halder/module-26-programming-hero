/*
function calculateTriangleArea(){
    console.log('inside function');
}
*/

/**
 * উদ্দেশ্য: একটি ত্রিভুজের ভূমি ও উচ্চতা পাওয়া। প্রদত্ত ফরমুলা ব্যবহার করে ক্ষেত্রফল নির্ণয় এবং তা ডিসপ্লে করা
 * 
 * Objective: get base, height of a trinagle. Calculate the area by using the provided formula and then display the area.
 * 
 * Step-1: Get the base value of the triangle
 * Step-2: adding an id in the base input field
 * Step-3: use getElementById to access the input field
 * Step-4: get the value from the input field
 * Step-5: convert the value to a number using parseFloat
 */



function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const trinagleBaseText = triangleBaseInput.value;
    const base = parseFloat(trinagleBaseText);
    console.log(base);

    
    //get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText) 
    console.log(height);

    // Calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the trinagle is', area);
    
    // Display Triangle Area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

