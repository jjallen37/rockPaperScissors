# RPS Code Review

## Level 1: Naming, Formatting, and Tools 

1. Structure 
- always use index.html
- For my own preference, moving the js into another file is nice

2. Formatting
- Using a formatter for your code allows you to better enforce standards. Code reviews can be more efficient when the content of the code is the focus instead of the formatting of it. This also causes code from different developers to look the same, creating a more uniform codebase.
- In general, it is especially useful to set these standards early in a project's lifespan. If you were to format a large codebase that has never been enforced, then every single file in it could change, which can obsfucate the Git history (and also make it look like you made like 100k lines of code changes all at once). In this case, I like to apply the Boyscout Rule. Leave code better than you found it. https://medium.com/@biratkirat/step-8-the-boy-scout-rule-robert-c-martin-uncle-bob-9ac839778385
- Javascript has especially good tools for formatting code and enforcing standards, ranging from to automatically formatting your changes to preventing developers from committing changes that violate the project's rules. For now however, rely on vanilla Visual Studio Code to do this for you.

CTRL+SHIFT+P -> "Format Document"

3. JsDoc  
- Javascript is a dynamically typed language, which means there aren't a lot of built in guard rails in determining object type. There is certainly a lot of flexibility with this, but it requires you to be careful.
- 

4. Naming 
https://dev.to/michi/tips-on-naming-boolean-variables-cleaner-code-35ig


....later in the lesson

# ENUMS
 - https://www.sohamkamani.com/blog/2017/08/21/enums-in-javascript/
 - Not explicitly in js, but good enough
 - WIN / LOSE / TIE
