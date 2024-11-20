## Requirements

(1p) On a web page, display a canvas having a size of 550x550px, horizontally centered on the screen, and surrounded by a 5px dashed pink border.
(1p) Display on the page one text input and one button. The text input must have Bootstrap's default styling. The button should also be styled with Bootstrap, using the information contextual class.
(0.5p) Restrict the input to only accept integer numbers between 1 and 10.
(1.5p) If the screen is extra large, the input should be displayed on 5 Bootstrap columns and the button on 7 Bootstrap columns. If the screen is large, the elements should interchange their sizes. If the screen is medium, they should both occupy the entire width of the screen and be placed one under the other.
(1p) The user should be able to click the button to trigger the drawing. If the value provided in the input is invalid, add an information Bootstrap badge on the screen containing the text "Invalid input" and don't draw anything on the canvas.
(4p) If the input is valid, draw as many squares as indicated in the textbox, using the following rules:
- the first square must have a size of 10x10px, the second one 20x20, the third one 30x30 etc.,
- the first square will be drawn in the top left corner of the canvas,
- the next squares will be drawn with the top left corner next to the bottom right corner of the previous square,
- the squares colors will be in the following sequence: red, yellow, green, blue, purple, magenta,
- if there are more squares than colors on the canvas, the sequence above must repeat.