# DOM Manipulation

These are some of the methods for manipulating the Document Object Model or DOM.

# Targeting Elements
## 1.) `document.getElementById(targetIdHere)`
- It targets the elements based on its ID in the document.
- ID must be unique for all the document.

## 2.) `document.querySelector(anySelector)`
- You can put any css selector on this methods

Example:
- `document.querySelector('#add-button')`
- `document.querySelector('.list-items')`

***Note:*** If you use this on selecting classes, it only returns the first matched element.

## 3.) `document.getElementsByClassName(classNameHere)`
- It returns HTMLCollection of elements that consist of the specified class name.

Example:
- `document.getElementsByClassName('ul-items')`

## 4.) `document.querySelectorAll(anySelector)`
- It is the same as `document.getElementsByClassName()`;