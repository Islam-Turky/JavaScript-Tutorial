// Here I Created variable and Make His Value The div "id = varb" in The HTML Element .
let varb = document.getElementById('varb');
// From Here I Write Simple Program on Variable Lesson 
let variable ; // declaration variable
variable = 1; // Assign value to variable
// We can combine declaration and assign value in one line like this
let variable2 = 2;

varb.innerHTML = `
From Here I Write Simple Program on Variable Lesson 
<h4>let variable ; declaration variable</h4>
<h4>variable = 1; Assign value to variable</h4>
<br>
<h4>// We can combine declaration and assign value in one line like this</h4>
<h4>let variable2 = 2;</h4>
`;

alert(`Variable = ${variable}\n variable2 = ${variable2}`);