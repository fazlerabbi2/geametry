
let counter = 1;

document.getElementById('triangle-btn').addEventListener('click',function(){ 
const totalInputmultiply =  getInputValue('triangle-b','triangle-h');
const TriangleArea = 0.5 * totalInputmultiply;
if(totalInputmultiply > 0){
    showResult('triangle',TriangleArea)
}
});

document.getElementById('Rectangle-btn').addEventListener('click',function(){
    const totalInputmultiply =  getInputValue('rectangle-w','rectangle-i');
    if(totalInputmultiply > 0){
        showResult('rectangle-title',totalInputmultiply)
    }

})

document.getElementById('parallelogram-btn').addEventListener('click',function(){
    const parallelogramMultiply = 10 * 12;
    showResult('parallelogram-title',parallelogramMultiply)

})

function getInputValue(inputValue1,inputValue2){
    const inputValueFirst =  document.getElementById(inputValue1).value;
    const inputValueParse = parseInt(inputValueFirst);
    const inputValueSecond =  document.getElementById(inputValue2).value;
    const triangleHInputParseIng =  parseInt(inputValueSecond);

    if(inputValueParse > 0){
        if(triangleHInputParseIng > 0) {
            const multiply = inputValueParse * triangleHInputParseIng;
            return multiply;
        }else{
            alert('Please input some positive Number')
        }
    }else{
        alert('Please input some positive Number')
    }


    
}



function showResult(title,result){
    const titleText = document.getElementById(title).innerText;
    const containerDiv = document.getElementById('result-div');
    const createNewDiv = document.createElement('div');
    createNewDiv.className = 'result';
    createNewDiv.innerHTML = `
    <span>${counter++}${titleText}</span>
    <span>${result}</span>
    <button class="btn btn-primary">Covert to m<sup>2</sup></button>
    `;
    containerDiv.appendChild(createNewDiv)


}

