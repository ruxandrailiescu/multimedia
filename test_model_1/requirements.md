## Requirements

(1p) On a web page, display a canvas having a size of 600x600px, horizontally centered on the screen,
and surrounded by a 5px solid purple border.
(1p) Display on the page one text input and one button. The text input must have Bootstrap's default 
styling. The button should also be styled with Bootstrap, using the information contextual class.
(0.5p) Restrict the input to only accept integer numbers between 1 and 10.
(1.5p) If the screen is extra large, the input should be displayed on 4 Bootstrap columns and the button 
on 8 Bootstrap columns. If the screen is large, the elements should interchange their sizes. If the screen is medium, they should both occupy the entire width of the screen and be placed one under the other.
(1p) The user should be able to click the button to trigger the drawing. If the value provided in the input is invalid, add an information Bootstrap badge on the screen containing the text "invalid input" and don't draw anything on the canvas.
(4p) If the input is valid, draw as many circles as the number in the input, using the following rules:
- all circles must be centered on the canvas and visible,
- all circles apart from the innermost must alternate the red and blue colors,
- the outermost circle will always be red,
- the innermost circle will be yellow,
- the innermost circle will have a radius of 30px and each subsequent circle will increase in radius with 30px more.