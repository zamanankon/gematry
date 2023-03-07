let value=0;
document.getElementById('triangle-btn').addEventListener('click',function(){
    let triangleInputOne=document.getElementById('input-triangleOne').value;  
    let triangleInputTwo=document.getElementById('input-triangleTwo').value;
    let triangleTotalValue=triangleInputOne*triangleInputTwo*0.5;
    if(triangleInputOne==""){
        alert('please Enter your Triangle value');
    }
    else{
    value=value+1;
    let tableContainer=document.getElementById('table-container');
    let tr=document.createElement('tr');
    tr.innerHTML=`
       <th>${value}</th>
       <td>Triangle</td>
       <td>${triangleTotalValue.toFixed(2)}cm<sup>2</sup></td>
       <td><button class="btn btn-accent">Convert</button></td>
     `
     tableContainer.appendChild(tr)
    }
});

document.getElementById('rectangle-btn').addEventListener('click',function(){
    let rectangleInputOne=document.getElementById('rectangle-inputOne').value;
    let rectangleInputTwo=document.getElementById('rectangle-inputTow').value;
    let rectangleTotalValue=rectangleInputOne*rectangleInputTwo;
    if(rectangleTotalValue==""){
        alert('please Enter your rectangle Value')
    }
    else{

   value=value+1;
    let tableContainer=document.getElementById('table-container');
    let tr=document.createElement('tr');
    tr.innerHTML=`
       <th>${value}</th>
       <td>Rectangle</td>
       <td>${rectangleTotalValue.toFixed(2)}cm<sup>2</sup></td>
       <td><button class="btn btn-accent">Convert</button></td>
     `
     tableContainer.appendChild(tr)
           
    }
})
  
document.getElementById('parallelogram-btn').addEventListener('click',function(){
    let parallelogramOne=document.getElementById('parallelogramOne-input').value;
    let parallelogramTwo=document.getElementById('parallelogramTwo-input').value;
    let parallelogramTotalValue=parallelogramOne*parallelogramTwo;
    
    value=value+1;
    let tableContainer=document.getElementById('table-container');
    let tr=document.createElement('tr');
    tr.innerHTML=`
       <th>${value}</th>
       <td>parallelogram</td>
       <td>${parallelogramTotalValue.toFixed(2)}cm<sup>2</sup></td>
       <td><button class="btn btn-accent">Convert</button></td>
     `
     tableContainer.appendChild(tr)
    });

    document.getElementById('rhombus-btn').addEventListener('click',function(){
       let rhombusOne=document.getElementById('rhombusOne-input').value;
       let rhombusTwo=document.getElementById('rhombusTwo-input').value;
       let rhombusTotalValue=0.5*rhombusOne*rhombusTwo;
       value=value+1;
       let tableContainer=document.getElementById('table-container');
       let tr=document.createElement('tr');
       tr.innerHTML=`
          <th>${value}</th>
          <td>rhombus</td>
          <td>${rhombusTotalValue.toFixed(2)}cm<sup>2</sup></td>
          <td><button class="btn btn-accent">Convert</button></td>
        `
        tableContainer.appendChild(tr)
    })

    document.getElementById('Pentagon-btn').addEventListener('click',function(){
       let rhombusOne=document.getElementById('PentagonOne-input').value;
       let rhombusTotalValue=(5 * rhombusOne * rhombusOne) / (4 * Math.tan(Math.PI / 5));
       value=value+1;
       let tableContainer=document.getElementById('table-container');
       let tr=document.createElement('tr');
       tr.innerHTML=`
          <th>${value}</th>
          <td>rhombus</td>
          <td>${rhombusTotalValue.toFixed(2)}cm<sup>2</sup></td>
          <td><button class="btn btn-accent">Convert</button></td>
        `
        tableContainer.appendChild(tr)
    })

   document.getElementById('Ellipse-btn').addEventListener('click',function(){
     let EllipseOneInput=document.getElementById('EllipseOne-input').value;
     let EllipseTwoInput=document.getElementById('EllipseTwo-input').value;
     let EllipseTwoInputValue=Math.PI * EllipseTwoInput * EllipseTwoInput;
   value=value+1;
   let tableContainer=document.getElementById('table-container');
   let tr=document.createElement('tr');
   tr.innerHTML=`
      <th>${value}</th>
      <td>Ellipse</td>
      <td>${EllipseTwoInputValue.toFixed(2)}cm<sup>2</sup></td>
      <td><button class="btn btn-accent">Convert</button></td>
    `
    tableContainer.appendChild(tr)
     })

