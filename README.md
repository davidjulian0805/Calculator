
# Calculator

This project is a **web-based calculator** built as part of **The Odin Project Foundations Course**. The calculator performs basic arithmetic operations and provides an interactive user interface using **HTML, CSS, and JavaScript**.

The goal of this project is to practice **JavaScript logic, DOM manipulation, and event handling**, while building a functional calculator from scratch.

---

## Project Overview

The calculator supports the four basic mathematical operations:

* Addition
* Subtraction
* Multiplication
* Division

Users can input numbers using on-screen buttons, select an operator, and calculate the result. The calculator processes one operation at a time and displays results dynamically.

---

## Features

* Basic arithmetic operations

  * Add
  * Subtract
  * Multiply
  * Divide

* Interactive calculator interface

* Dynamic display updates

* Clear button to reset the calculator

* Prevents invalid operations (like dividing by zero)

* Handles chained operations (e.g., `12 + 7 - 1 =`)

* Results are rounded to prevent display overflow

---

## Extra Credit Features

* Decimal input support (`.` button)
* Prevents multiple decimals in a number
* **Backspace button** to undo the last input
* **Keyboard support** for faster input

---

## Technologies Used

* HTML5
* CSS3
* JavaScript
* Git
* GitHub

---

## What I Learned

Through this project I learned how to:

* Create reusable **JavaScript functions**
* Manage **application state** (numbers and operators)
* Use **event listeners** for button interactions
* Update the **DOM dynamically**
* Handle **edge cases and bugs**
* Improve debugging using **browser developer tools**

---

## How It Works

1. Users input the **first number**.
2. Users select an **operator**.
3. Users input the **second number**.
4. When `=` is pressed, the calculator calls the `operate()` function.
5. The result is calculated and displayed.
6. If another operator is entered, the calculator continues using the previous result.

---

## Edge Cases Handled

* Prevents evaluation without complete input
* Handles **consecutive operator presses**
* Prevents **division by zero**
* Clears all data when **Clear** is pressed
* Starts a new calculation when a digit is entered after a result

---

## Live Demo

https://davidjulian0805.github.io/Calculator/


## How to Run the Project

Clone the repository:

```bash id="bo3j9r"
git clone https://github.com/davidjulian0805/Calculator.git
```

Open the project folder and run:

```
index.html
```

in your browser.

---

## Future Improvements

Possible improvements include:

* Better UI design
* Mobile responsiveness
* Scientific calculator functions
* History of calculations

---

## Acknowledgements

Project provided by:

**The Odin Project**
[https://www.theodinproject.com](https://www.theodinproject.com)

---




