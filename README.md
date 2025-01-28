Setup Function (setup):

I used createCanvas(800, 600) to create a canvas that’s 800 pixels wide and 600 pixels tall.
I used background(220, 200, 180) to give the canvas a neutral light beige background.
noStroke() was added to remove outlines around the shapes, so they look clean and filled.
Draw Function (draw):

I called a custom function drawRandomShapes() inside draw() so that it executes every frame.
This ensures the screen is continuously updated with new random shapes.
Custom Function (drawRandomShapes):

I used a for loop to repeat the process of drawing shapes 10 times per frame.
Random numbers were generated using the random() function for:
Position (x and y) of each shape.
Size of the shape, between 20 and 50 pixels.
Colors (r, g, b), which added a fun variety to the visuals.
I used an if statement with random() to randomly choose between drawing a circle (ellipse) or a square (rect) for each iteration.

Challenges and Solutions
Challenge: Understanding how random() works.
Solution: I tested different ranges to see how random(min, max) affects the output. This gave me control over the size and position of shapes.

Challenge: Organizing the code to make it readable.
Solution: I created a custom function (drawRandomShapes) to handle the shape-drawing logic, keeping the main draw() function clean and simple.

Challenge: Adding variety to the sketch without making it too complex.
Solution: I kept it basic with just two shapes (ellipse and rect) and used random colors and positions for variety.

What I Learned
Randomness: The random() function is a powerful way to create variation in size, color, and placement of shapes.
Custom Functions: Using functions like drawRandomShapes() helps organize code and makes it reusable if I want to extend the sketch later.
Loops: The for loop is an efficient way to repeat similar actions, like drawing multiple shapes in a single frame.
Interactivity and Fun: Even simple sketches can look dynamic and engaging with small random elements.
5. Ideas for Future Improvements
Add interactivity: Shapes could change size or color when the mouse moves over them.
Experiment with more shapes: Try adding triangles or lines.
Clear the canvas: Add a way to reset the sketch by pressing a key.
Gradients: Experiment with gradient colors for the background or shapes.
