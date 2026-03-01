# 🎨 Etch‑a‑Sketch – The Odin Project

A browser‑based sketchpad / Etch‑a‑Sketch toy built as part of [The Odin Project](https://www.theodinproject.com/) Foundations course. Hover over the grid to draw – each square starts with a random color and progressively darkens to black after ten passes. You can resize the grid dynamically up to 100×100 squares, all within the same 960×960 pixel canvas.

## ✨ Features

- ✅ **Dynamic grid creation** – a 16×16 grid is generated with JavaScript (no hard‑coded divs).
- ✅ **Flexbox layout** – the grid is created using `flex-wrap` to perfectly align squares.
- ✅ **Hover drawing** – mouse over a square to permanently change its color.
- ✅ **Random base colors** – each square gets a unique random RGB value the first time it’s touched.
- ✅ **Progressive darkening** – each interaction darkens the square by 10% until it becomes fully black after ten passes.
- ✅ **Resizable canvas** – click the “New Grid” button, enter a number (max 100), and a brand new grid appears in the same space.
- ✅ **Responsive button** – a styled button with interactive hover/active states.
- ✅ **Clean UI** – subtle grid lines, smooth transitions, and a modern gradient background.

## 🛠 Built With

- **HTML5** – minimal structure.
- **CSS3** – Flexbox, gradients, box‑shadows, transitions.
- **JavaScript (ES6)** – DOM manipulation, event listeners, random color generation, data attributes for tracking darkness levels.

## 📚 What I Learned

- How to dynamically create and remove DOM elements using JavaScript.
- Using **Flexbox** to create a grid layout (avoiding CSS Grid as per project requirements).
- Implementing a hover effect with `mouseenter` events to trigger drawing.
- Storing per‑square state using `data-*` attributes (base RGB, darkness level) to enable progressive darkening.
- Calculating darkened colors with a simple factor based on interaction count.
- Handling user input with `prompt()` and validating it (max 100, positive integer).
- Structuring JavaScript code to be modular and maintainable.

## 🌐 Live Demo
You can run this project locally – no deployment needed.  

## 📁 Installation
# 🎨 Etch‑a‑Sketch – The Odin Project

![Project Screenshot](./screenshot.png)  
*Replace with an actual screenshot of your finished sketchpad.*

A browser‑based sketchpad / Etch‑a‑Sketch toy built as part of [The Odin Project](https://www.theodinproject.com/) Foundations course. Hover over the grid to draw – each square starts with a random color and progressively darkens to black after ten passes. You can resize the grid dynamically up to 100×100 squares, all within the same 960×960 pixel canvas.

## ✨ Features

- ✅ **Dynamic grid creation** – a 16×16 grid is generated with JavaScript (no hard‑coded divs).
- ✅ **Flexbox layout** – the grid is created using `flex-wrap` to perfectly align squares.
- ✅ **Hover drawing** – mouse over a square to permanently change its color.
- ✅ **Random base colors** – each square gets a unique random RGB value the first time it’s touched.
- ✅ **Progressive darkening** – each interaction darkens the square by 10% until it becomes fully black after ten passes.
- ✅ **Resizable canvas** – click the “New Grid” button, enter a number (max 100), and a brand new grid appears in the same space.
- ✅ **Responsive button** – a styled button with interactive hover/active states.
- ✅ **Clean UI** – subtle grid lines, smooth transitions, and a modern gradient background.

## 🛠 Built With

- **HTML5** – minimal structure.
- **CSS3** – Flexbox, gradients, box‑shadows, transitions.
- **JavaScript (ES6)** – DOM manipulation, event listeners, random color generation, data attributes for tracking darkness levels.

## 📚 What I Learned

- How to dynamically create and remove DOM elements using JavaScript.
- Using **Flexbox** to create a grid layout (avoiding CSS Grid as per project requirements).
- Implementing a hover effect with `mouseenter` events to trigger drawing.
- Storing per‑square state using `data-*` attributes (base RGB, darkness level) to enable progressive darkening.
- Calculating darkened colors with a simple factor based on interaction count.
- Handling user input with `prompt()` and validating it (max 100, positive integer).
- Structuring JavaScript code to be modular and maintainable.

## 🌐 Live Demo

You can run this project locally – no deployment needed.  
[Click here for a live preview](https://your-username.github.io/etch-a-sketch) if you've deployed it via GitHub Pages.

## 📁 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/odin-etch-a-sketch.git
   
2. Navigate into the folder:

bash
cd odin-etch-a-sketch
Open index.html in your favorite browser.

🎯 How to Use
Move your mouse over the grid to start drawing.

Each square you touch will get a random color and become darker with every additional pass (10 passes to black).

Click the New Grid button to reset the canvas and choose a new grid size (up to 100×100).

 Acknowledgments
The Odin Project for the project idea and excellent curriculum.

The clean design and progressive enhancement tips made this a fun challenge.

This project is part of my journey through The Odin Project – building real things, one commit at a time.
