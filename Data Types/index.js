// Variables From HTML .
let number = document.getElementById('NUM');
let bigInt = document.getElementById('BINT');
let string = document.getElementById('STR');
let boolean = document.getElementById('BOOL');
let nullType = document.getElementById('NULL');
let undefinedType = document.getElementById('UNDEF');
let object = document.createElement('OBJ');
let symbol = document.createElement('SYMB');

// Number .
number.innerHTML = `${n = 123} or ${n = 12.345}
    <br> alert(1 / 0); // Infinity <br> 
    alert( Infinity ); // Infinity <br> 
    alert( "not a number" / 2 ); // NaN, such division is erroneous<br>
    **************************<br>
    alert( NaN + 1 ); // NaN<br>
    alert( 3 * NaN ); // NaN<br>
    alert( "not a number" / 2 - 1 ); // NaN<br>`;

// bigInt .
bigInt.innerHTML = `console.log(9007199254740991 + 1); // 9007199254740992 <br> 
    console.log(9007199254740991 + 2); // 9007199254740992 <br>
    ***************************<br>
    // the "n" at the end means it's a BigInt
    const bigInt = 1234567890123456789012345678901234567890n;`;

//  string .
string.innerHTML = `let str = "Hello";<br>
    let str2 = 'Single quotes are ok too';<br>
    let phrase = \`can embed another \${str}\`;<br>
    **************************
    <h3>NOTE:</h3>
    1. Double quotes: "Hello".<br>
    2. Single quotes: 'Hello'.<br>
    3. Backticks: \`Hello\`.`;

// boolean .
boolean.innerHTML =  `let nameFieldChecked = true; // yes, name field is checked<br>
    let ageFieldChecked = false; // no, age field is not checked<br>
    ****************************<br>
    let isGreater = 4 > 1;<br>
    alert( isGreater ); // true (the comparison result is "yes")`;

// NULL
nullType.innerHTML = `let age = null;<br>
    `;

// undefined
undefinedType.innerHTML = `let age;<br>
    alert(age); // shows "undefined"<br>
    *************************<br>
    let age = 100;<br> <br>
    // change the value to undefined<br>
    age = undefined;<br> <br>
    alert(age); // "undefined"
    `;