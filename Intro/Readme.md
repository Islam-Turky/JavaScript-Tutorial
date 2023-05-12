# Description
In This dir You Will Learn Where You Should write Your JavaScript Program 
and How To Run It.
# Node.Js
is JavaScript runtime where is used to generate backend applications.
# Code Structure

<h2>Semicolon</h2>
We Can use semicolon ";" and We can ommit it in our code.
there are some cases where we should use semicolon for example
when there is two two statements and the second statement contains 
at the end of the line semicolon we should put semicolon at the end 
of the first statement to avoid errors or problems.

# The modern mode, "use strict"
For a long time, JavaScript evolved without compatibility issues. New features were added to the language while old functionality didn’t change.
<br>
That had the benefit of never breaking existing code. But the downside was that any mistake or an imperfect decision made by JavaScript’s creators got stuck in the language forever.
<br>
This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language and modified some of the existing ones. To keep the old code working, most such modifications are off by default. You need to explicitly enable them with a special directive: "use strict".
<br>
<h2>Browser console</h2>
When you use a developer console to run code, please note that it doesn’t use strict by default.
<br>
=> Sometimes, when use strict makes a difference, you’ll get incorrect results.
<br>
=> It works in most browsers, namely Firefox and Chrome.
<br>
<h2>Should we “use strict”?</h2>
The question may sound obvious, but it’s not so.
<br>
One could recommend to start scripts with "use strict"… But you know what’s cool?
<br>
Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.
<br>
So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.
<br>
As of now, we’ve got to know about use strict in general.
<br>
In the next chapters, as we learn language features, we’ll see the differences between the strict and old modes. Luckily, there aren’t many and they actually make our lives better.

# References
=> [To Download NodeJS](https://nodejs.org/en)
<br>

=> [Hello World](https://javascript.info/hello-world)
<br>

=> [Strict Mode](https://javascript.info/strict-mode)