# Data Type
<h3>A value in JavaScript is always of a certain type. For example, a string or a number.</h3>
<p>
There are "eight" basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.<br>
Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.
</p>

<h2>Number</h2>
<p>
The number type represents both integer and floating point numbers.
<br>
There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
<br>
Besides regular numbers, there are so-called “special numeric values” which also belong to this data type:
<br>
Infinity, -Infinity and NaN.
<br>
Infinity represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
<br>
We can get it as a result of division by zero or just reference it directly.
<br>
"NaN" represents a computational error. It is a result of an incorrect or an undefined mathematical operation,
<br>
"NaN" is sticky. Any further mathematical operation on NaN returns NaN
<br>
=> So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).
</p>

![no](https://github.com/Islam-Turky/JavaScript-Tutorial/blob/4b97469c60b58f7955cf8676fd6c2fa3c0ec2954/Images/NumberType.png)

<h2>BigInt</h2>
<p>
==>In JavaScript, the “number” type cannot safely represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives.
<br>
A BigInt value is created by appending n to the end of an integer
<p>

<h2>String</h2>
<p>
<h3>In JavaScript, there are 3 types of quotes.</h3>
<ol>
    <li>Double quotes: "Hello".</li>
    <li>Single quotes: 'Hello'.</li>
    <li>Backticks: `Hello`.</li>
</ol>
<br>
--> Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
<br>
--> Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
</p>

<h2>Boolean</h2>
<p>
The boolean type has only two values: true and false.
<br>
This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
</p>

<h2>null</h2>
<p>
The special null value does not belong to any of the types described above
<br>
In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
<br>
It’s just a special value which represents “nothing”, “empty” or “value unknown”.
</p>

<h2>undefined</h2>
<p>
The special value undefined also stands apart. It makes a type of its own, just like null.
<br>
The meaning of undefined is “value is not assigned”.
<br>
If a variable is declared, but not assigned, then its value is undefined.
<br>
Technically, it is possible to explicitly assign undefined to a variable But we don’t recommend doing that.
<br>
Normally, one uses null to assign an “empty” or “unknown” value to a variable, while undefined is reserved as 
<br>
a default initial value for unassigned things.
</p>

<h2>Objects</h2>
<p>
The "object" type is special.
<br>
All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
</p>

<h2>Symbols</h2>
<p>
The "symbol" type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.
</p>

<h4>We Can indeicate The The type of value to any Variable using typeof operator</h4>
