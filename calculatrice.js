
 let error = document.createElement("span");
 error.appendChild( document.createTextNode("syntax error"));

let calculated = false;
function click (e)
{
  e.onclick=function()
  {
    if (calculated == true) {
      document.querySelector(".calculatrice .input input").value = '';
      calculated = false;
    }
    document.querySelector(".calculatrice .input input").value=document.querySelector(".calculatrice .input input").value+e.getAttribute("id");
  }
}


let arr=[];
for(let i=0;i<17;i++)
{
  
  arr[i]=document.querySelector(`.calculatrice .calc`).children[i];
}

arr.forEach(click);


// delete one character
document.querySelector(`.calculatrice .calc`).children[17].onclick=function()
{
  document.querySelector(".calculatrice .input input").value =document.querySelector(".calculatrice .input input").value.slice(0,document.querySelector(".calculatrice .input input").value.length-1);
}

//clear button
document.querySelector(`.calculatrice .calc`).children[18].onclick=function()
{
document.querySelector(".calculatrice .input input").value="";
}


// plus button
document.querySelector(`.calculatrice .calc`).children[11].onclick=function()
{
 document.querySelector(".calculatrice .input input").value+="+";
}



//substraction button
document.querySelector(`.calculatrice .calc`).children[12].onclick=function()
{
 document.querySelector(".calculatrice .input input").value+="-";
}

// equals to button '='
 document.querySelector(`.calculatrice .calc`).children[19].onclick=function calculate()
{
   try {
     document.querySelector(".calculatrice .input input").value += '=' + eval(document.querySelector(".calculatrice .input input").value);
     calculated = true;
   }
   catch
    {
      document.body.appendChild(error);
    error.style.cssText = "font-size:40px";
    calculated = true;
    setTimeout(() => { document.body.removeChild(error); document.querySelector(".calculatrice .input input").value = '';}, 1500);
    }
    }
   

// division button
document.querySelector(`.calculatrice .calc`).children[13].onclick=function()
{
 document.querySelector(".calculatrice .input input").value+="/";
}



// multiplication button
document.querySelector(`.calculatrice .calc`).children[14].onclick=function()
{
 document.querySelector(".calculatrice .input input").value+="*";
}

// !!!!!!!! eval doesn't include sin and cos !!!!!!!!!!!!

//cosinus button
document.querySelector(`.calculatrice .calc`).children[20].onclick=function()
{
  document.querySelector(".calculatrice .input input").value = "cos(";

  document.querySelector(`.calculatrice .calc`).children[19].onclick=function calculate()
{

    document.querySelector(".calculatrice .input input").value += ')=' + Math.cos(document.querySelector(".calculatrice .input input").value.split('(')[1].split(')')[0]);
    calculated = true;
   
}
  
}


// sinus button
document.querySelector(`.calculatrice .calc`).children[21].onclick = function () {
  document.querySelector(".calculatrice .input input").value += "sin(";

  document.querySelector(`.calculatrice .calc`).children[19].onclick = function calculate() {

    document.querySelector(".calculatrice .input input").value += ')=' + Math.sin(document.querySelector(".calculatrice .input input").value.split('(')[1].split(')')[0]);
    calculated = true;
  }
}

